<?php
require_once ($_SERVER['DOCUMENT_ROOT']."/aim/v1/api/connect.php");
$systemID=3549983;
$res=query("EXEC api.getTree $systemID");
while($row=fetch_object($res)) { $row->children=[];$items->{$row->id}=$row;}
next_result($res);
while($row=fetch_object($res)) { $items->{$row->id}->{$row->name}=$row->value;}
foreach ($items as $id=>$item)if($item->masterID)array_push($items->{$item->masterID}->children,$item);

//die(json_encode($items->{$systemID}));

function path($item) {
	global $items;
	if($items->{$item->masterID})$path=path($items->{$item->masterID});
	return trim($path.='.'.$item->title,'.');
}


function write($item){
	global $par,$items,$columns;
	$name=[dms_Location=> "LocationSO_", dms_Group=> "GroupSO_", dms_System=> "SystemInstanceSO_"];
	$item->LocationID='';
	$item->SystemInstanceID='';
	$item->GroupID='';
	$item->TagID='';
	$item->TextualValue='';
	$item->NumericValue='';
	//$item->LogType=($name[$item->schema]?:$item->schema).$item->AttributeType;
	$item->StandardOutput=strtolower($item->AttributeType);

	$idname = [ dms_Location=> "LocationID", dms_Group=> "GroupID", dms_System=> "SystemInstanceID", Attribute=> "TagID" ];

	$master=$item;
	$item->{$idname[$item->schema]}=$item->id;
	while($master=$items->{$master->masterID}){
		$item->{$idname[$master->schema]}=$item->{$idname[$master->schema]}?:$master->id;
	}

	//$idname = $idname[$item->schema];
	//$par->{$idname}=$item->{$idname}=$item->id;


	//$item->title1=($name[$item->schema]?:$item->schema).$item->title;
	//echo PHP_EOL."<tr><td style='padding-left:".$item->level."0'>".$item->title1."</td><td>$idname=id=$item->id</td><td>$item->AttributeType</td></tr>";
	$style="";
	//if (in_array($item->StandardOutput,[notapplicable]))$style.="color:#aaa;";
	$item->Path=path($items->{$item->masterID});
	$item->acsm=1;
	if (!$item->TagID || $item->selected==0)$item->acsm='';
	if (!in_array($item->StandardOutput,[criticalfailure,noncriticalfailure,locking,maintenance,running,runningmode,security,prewarning_1,prewarning_2,prewarning_3,measurement_1,measurement_2,measurement_3,measurement_4,measurement_5,measurementerrorflag]))$item->acsm='';
		

if (!$item->acsm) $style.="color:#aaa;";



	foreach ($columns as $key)$values[$key]=$item->{$key};
	//echo PHP_EOL."<tr style='$style'><td style='padding-left:".$item->level."0'>".$item->title."</td><td>".implode("</td><td>",array_values($values))."</td></tr>";
	echo PHP_EOL."<tr style='$style'><td>".implode("</td><td>",array_values($values))."</td></tr>";
	foreach ($item->children as $i => $item)write($item);
}
$columns=[Path,Name,Title,StandardOutput,selected,Value,Unit,Deadband,Low,Height,MinRawValue,MaxRawValue,MinEngValue,MaxEngValue,Hysteresis,TagID,SystemInstanceID,GroupID,LocationID,id,detailID,acsm];

echo "<style>table{font-family:consolas;font-size:10pt;}tr>:nth-child(n+5){text-align:right;}td{white-space:nowrap;}</style><table>";
echo PHP_EOL."<tr><td>".implode("</td><td>",$columns)."</td></tr>";

write($items->{$systemID});
echo "</table>";

?>