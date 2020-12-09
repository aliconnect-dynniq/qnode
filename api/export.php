<?php
require_once ($_SERVER['DOCUMENT_ROOT']."/aim/v1/api/connect.php");
$get=(object)$_GET;
$res=query("EXEC api.getBuild @rootID=$get->rootID");
while($row=fetch_object($res))$data->class->{$row->id}=$row->name;
next_result($res);while($row=fetch_object($res))$data->field->{$row->id}=$row->name;
next_result($res);while($row=fetch_object($res)){
	$row->class=$data->class->{$row->classID};
	$class->{$row->class}->{$row->id}=$data->items->{$row->id}=cleanrow($row);
	unset($row->id,$row->obj);
}
next_result($res);while($row=fetch_object($res)){
	$data->items->{$row->id}->values->{$row->name}=cleanrow($row);
	unset($row->name,$row->id);
}

//die(json_encode($data->class));

if(isset($_GET[connector])) {

	//die(json_encode($class->dms_Tag));
	foreach($class->dms_Tag as $id=>$item) $item->values->intSystemID=$data->items->{$item->values->intSystemID->itemID};
	die(json_encode($class->dms_Tag));

	foreach($class->dms_SystemInstance as $id=>$item) $exp->SystemInstance->$id=$item;

	//foreach($class->dms_Tag as $id=>$item) $tags->

	die(json_encode($exp));

	die(json_encode($class->dms_Tag));

	
	foreach($class->dms_Tag as $id=>$item) 
	die(json_encode($tags));


	die(json_encode($class->dms_SystemInstance));



	foreach($class->dms_ModbusTCPDevice as $id=>$item) {
		$connData->$id=$item;
		$item->class=ModbusTCPDevice;
		$item->values=array(IPAddress=>$item->values->strIPAddress,PortNr=>$item->values->intPortNr,UnitID=>$item->values->intUnitID,ConnectionTimeout=>$item->values->intConnectionTimeout,ResponseTimeout=>$item->values->intResponseTimeout);
	}
	foreach($class->dms_SNMPDevice as $id=>$item) {
		$connData->$id=$item;
		$item->class=SNMPDevice;
		$item->values=array(IPAddress=>$item->values->strIPAddress,PortNr=>$item->values->intPortNr,TimeoutMS=>$item->values->intTimeoutMS,Community=>$item->values->strCommunity);
	}
	die(json_encode(array(value=>array_values((array)$connData))));
}





if(strpos($_GET[contentType], tbl) !== false) {
	header("Content-type: text/html");
	echo '<base target="_blank"><link href="/lib/css/tbl.css" rel="stylesheet" />';
	while($row=fetch_object($res)) {$items->{$row->id}=$class->{$row->class}->{$row->id}=$row;}
	if(next_result($res)) while($row=fetch_object($res)) {$items->{$row->id}->values->{$row->name}=$row;unset($row->id);unset($row->name);}

	foreach($class as $classGroupName=>$className){
		echo "<table><caption>$classGroupName</caption>";
		$header=null;
		foreach($className as $id => $item){
			if (!$header){
				$header=true;
				echo "<tr>";
				foreach($item as $attributeName=>$value) if(!is_object($value)) echo "<td>$attributeName</td>";
				foreach($item->values as $attributeName => $attribute) echo "<td>$attributeName</td>";
				echo "</tr>";
			}
			echo "<tr>";
			foreach($item as $attributeName=>$value) if(!is_object($value)) echo "<td>$value</td>";
			foreach($item->values as $attributeName => $attribute) echo "<td>$attribute->value</td>";
			echo "</tr>";
		}
		echo "</table>";
	}
	die();
}

while($row=fetch_object($res)) {$items->{$row->id}=$class->{$row->class}->{$row->id}=cleanrow($row);}
if(next_result($res)) while($row=fetch_object($res)) {$items->{$row->id}->values->{$row->name}=cleanrow($row);unset($row->id);unset($row->name);}


if(strpos($_GET[contentType], html) !== false) {

	foreach($items as $id=>$item)$item->children=array();
	foreach($items as $id=>$item)if($item->masterID)array_push($items->{$item->masterID}->children,$item);

	function echoItem($item,$level) {
		echo "<a name='$item->id'></a>";
		echo "<h$level>$item->title:$item->class <small>[$item->id]</small></h$level>";
		echo "<table>";
		foreach($item as $attributeName=>$value) if(!is_object($value) && !is_array($value) && $value) echo "<tr><td>$attributeName</td><td>$value</td></tr>";
		foreach($item->values as $attributeName => $attribute) echo "<tr><td>$attributeName</td><td><a ".($attribute->itemID?"href='#$attribute->itemID'":"").">$attribute->value</a></td></tr>";
		echo "</table>";
		if ($item->children){
			echo "<b>Contains of:</b>";
			echo "<ol>";
			foreach($item->children as $idx=>$child)echo"<li><a href='#$child->id'>$child->title</a>:$child->class <small>[$child->id | $child->tag]</small></li>";
			echo "</ol>";
		}
	}

	//echoItem(1,$items->{$get->rootID});
	////die(json_encode($items->{$get->rootID}));

	header("Content-type: text/html");
	echo '<link href="/lib/css/tbl.css" rel="stylesheet" />';
	$rootItem=$items->{$get->rootID};
	//echo "<div>Export <a href='#$rootItem->id'>$rootItem->title</a>:$rootItem->class <small>[$rootItem->id]</small></div>";
	foreach($class as $classGroupName=>$className){
		echo "<h1>$classGroupName</h1>";
		echo "<ol>";
		foreach($className as $id => $item){
			echo "<li><a href='#$id'>$item->title</a>:$item->class <small>[$item->id | $item->tag]</small></li>";
		}
		echo "</ol>";
		foreach($className as $id => $item)echoItem($item,2);
	}
	die();
}

if(isset($_GET[make])) {


	foreach($items as $id=>$item)$item->children=array();
	foreach($items as $id=>$item)if($item->masterID)array_push($items->{$item->masterID}->children,$item);
	function echoItem($item,$level) {
		global $html;
		$html.= "<a name='$item->id'></a>";
		$html.="<h$level>$item->title:$item->class <small>[$item->id]</small></h$level>";
		$html.="<table>";
		foreach($item as $attributeName=>$value) if(!is_object($value) && !is_array($value) && $value) $html.="<tr><td>$attributeName</td><td>$value</td></tr>";
		foreach($item->values as $attributeName => $attribute) $html.="<tr><td>$attributeName</td><td><a ".($attribute->itemID?"href='#$attribute->itemID'":"").">$attribute->value</a></td></tr>";
		$html.="</table>";
		if ($item->children){
			$html.="<b>Contains of:</b>";
			$html.="<ol>";
			foreach($item->children as $idx=>$child)$html.="<li><a href='#$child->id'>$child->title</a>:$child->class <small>[$child->id | $child->tag]</small></li>";
			$html.="</ol>";
		}
	}

	//echoItem(1,$items->{$get->rootID});
	////die(json_encode($items->{$get->rootID}));

	//header("Content-type: text/html");
	$html.='<link href="/lib/css/tbl.css" rel="stylesheet" />';
	$rootItem=$items->{$get->rootID};
	//echo "<div>Export <a href='#$rootItem->id'>$rootItem->title</a>:$rootItem->class <small>[$rootItem->id]</small></div>";
	foreach($class as $classGroupName=>$className){
		$html.="<h1>$classGroupName</h1>";
		$html.="<ol>";
		foreach($className as $id => $item){
			$html.="<li><a href='#$id'>$item->title</a>:$item->class <small>[$item->id | $item->tag]</small></li>";
		}
		$html.="</ol>";
		foreach($className as $id => $item)echoItem($item,2);
	}

	file_put_contents($fname=__DIR__."/export/".$_GET[fname]."_configuration_010.html",$html);
	file_put_contents($fname=__DIR__."/export/".$_GET[fname]."_configuration_010.json",json_encode($class,JSON_PRETTY_PRINT));



	//if(isset($_GET[generic])) {
		$xml = new SimpleXMLElement('<Generic_configurations></Generic_configurations>');

		$filename="A2_generic_configuration_010";
		$classGroups=array(Systems=>dms_System,Tags=>dms_Tag,ModbusTCPRanges=>dms_ModbusTCPRanges,tblSetPointAlarms=>dms_tblSetPointAlarm,SNMPItems=>dms_SNMPItem);

		foreach($classGroups as $classGroupName=>$className){
			$xmlClassGroup = $xml->addChild($classGroupName);
			foreach($class->{$className} as $id => $item){
				$xmlItem = $xmlClassGroup->addChild(str_replace(dms_,"",$item->class));
				foreach($item->values as $attributeName => $attribute) if($attribute->value) {
					$xmlAttribute = $xmlItem->addChild($attributeName,$attribute->value);
					unset($attribute->value);
					foreach($attribute as $attributeName=>$value) $xmlAttribute[$attributeName]=$value;
				}
				unset($item->values);
				foreach($item as $attributeName=>$value) $xmlItem[$attributeName]=$value;
			}
		}

		file_put_contents($fname=__DIR__."/export/".$_GET[fname]."_generic_configuration_010.xml",$xml->asXml());
		echo $fname;

	//}
	//else {

		$xml = new SimpleXMLElement('<Specific_configurations></Specific_configurations>');
		$classGroups=array(Locations=>dms_Location,Groups=>dms_Group,PLaces=>dms_Place,ModbusTCPDevices=>dms_ModbusTCPDevice,SNMPDevices=>dms_SNMPDevice,SystemInstances=>dms_SystemInstance);
		$filename="A2_specific_configuration_010";

		foreach($classGroups as $classGroupName=>$className){
			$xmlClassGroup = $xml->addChild($classGroupName);
			foreach($class->{$className} as $id => $item){
				$xmlItem = $xmlClassGroup->addChild(str_replace(dms_,"",$item->class));
				foreach($item->values as $attributeName => $attribute) if($attribute->value) {
					$xmlAttribute = $xmlItem->addChild($attributeName,$attribute->value);
					unset($attribute->value);
					foreach($attribute as $attributeName=>$value) $xmlAttribute[$attributeName]=$value;
				}
				unset($item->values);
				foreach($item as $attributeName=>$value) $xmlItem[$attributeName]=$value;
			}
		}
		$xmlstring=$xml->asXml();
		file_put_contents($fname=__DIR__."/export/".$_GET[fname]."_specific_configuration_010.xml",$xml->asXml());
		echo $fname;

	//}


	//header("Content-type: text/xml");
	//if(isset($_GET[download])) header("Content-disposition: attachment; filename=$filename.xml");
	die(Done);
	die($xml->asXml());
}



die(json_encode($class));




?>
