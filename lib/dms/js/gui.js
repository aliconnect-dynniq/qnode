(function() {
  const $ = aim;
  const AttributeTypeFilter = {
    CriticalFailure: { filtertype: 'alarm', stateButton: 'CriticalFailure' },
    NonCriticalFailure: { filtertype: 'alarm', stateButton: 'NonCriticalFailure' },
    Locking: { filtertype: 'alarm', stateButton: 'NonCriticalFailure' },
    Maintenance: { filtertype: 'alarm', stateButton: 'NonCriticalFailure' },
    Running: { filtertype: 'state', stateButton: 'Running' },
    RunningMode: { filtertype: 'state', stateButton: 'Running' },
    Security: { filtertype: 'alarm', stateButton: 'NonCriticalFailure' },
    PreWarning_1: { filtertype: 'alarm', stateButton: 'Warning' },
    PreWarning_2: { filtertype: 'alarm', stateButton: 'Warning' },
    PreWarning_3: { filtertype: 'alarm', stateButton: 'Warning' },
    Measurement_1: { filtertype: 'measurement', stateButton: '' },
    Measurement_2: { filtertype: 'measurement', stateButton: '' },
    Measurement_3: { filtertype: 'measurement', stateButton: '' },
    Measurement_4: { filtertype: 'measurement', stateButton: '' },
    Measurement_5: { filtertype: 'measurement', stateButton: '' },
    MeasurementErrorFlag: { filtertype: 'measurement', stateButton: '' },
  }
  for (var attributeName in AttributeTypeFilter) {
    AttributeTypeFilter[attributeName].checked = 1;
  }
  itemList = [];

  function select(el) {
    if (el.name) {
      [...el.parentElement.children].forEach(childElement => {
        if (childElement.name === el.name) {
          childElement.removeAttribute('checked');
        }
      });
    }
    if (el.hasAttribute('checked')) {
      el.removeAttribute('checked');
    } else {
      el.setAttribute('checked', '');
    }
    setfilter[el.id](el.hasAttribute('checked'));
    writefilter([]);
  }
  function onselect(event) {
    select(event.target);
  }


  $()
  .on('disconnect', event => {
    $().disconnected = true;
  })
  .on('message', event => {
    if (event.data) {
      gui.setTree();
    }
  })
  .on('init', event => {
    // $().datainit(createGui);
    // DEBUG: MAX, tijdelijk uitgezet mbv return, later werkend maken
    return;
    ws.request({url:'items',method:'GET' }, (data) => {
      data.body.forEach(api.onload);
      // console.debug('ws_respond',$.Item.get($().auth.access.sub]);
      $().onload();
    });
    return;
    console.debug('CONNECT', data);
    var value = data.value || [data];
    value.forEach(api.onload);
    $().onload();
  })
  .on('load', event => {
    $(document.body).class('col').append(
      $('nav').class('row head').append(
        $('div').style('width:400px;color:white;').append(
          $('img').src('image/logo_left.png'),
          elemTime = $('div').text('UTC time:'),
          $('div').id('acsmconnect').text('ACSM Status: Offline'),
        ),
        $('div').class('aco row').id('index').style('flex-wrap:wrap;').append(
          $('ul').class('row').style('padding:0;margin:0;list-style:none;').append(
            $('li').append($('div').class('symbol row').attr('Running','').html('Geen<br /> fouten')),
            $('li').append($('div').class('symbol row').attr('CriticalFailure','').html('Storing<br />urgent')),
            $('li').append($('div').class('symbol row').attr('NonCriticalFailure','').html('Storing<br />niet urgent')),
            $('li').append($('div').class('symbol row').attr('Warning','').html('Voorwaarschuwing<br />ongewenste stand')),
            $('li').append($('div').class('symbol row').attr('error','X').html('Storing<br />Communicatie')),
          ),
        ),
        $('div').style('width:200px;text-align:center;').append($('img').src('image/logo_right.png')),
      ),
      $('div').class('row aco').append(
        $('div').class('col').style('border-right:solid 1px gray;height:100%;flex-basis:400px;').append(
          $('div').class('row top').text('Navigatie'),
          folders = $('div').class('aco col').style('height:0px;'),
        ),
        $('div').class('col aco').append(
          $('div').class('row top').append(
            $('button').class('abtn his').id('actueel').checked('').name('datatype').type('button').onclick(onselect).text('Actueel'),
            $('button').class('abtn his').id('uur1').name('tijd').type('button').onclick(onselect).text('1 uur'),
            $('button').class('abtn his').id('uur4').name('tijd').type('button').onclick(onselect).text('4 uur'),
            $('button').class('abtn his').id('uur24').name('tijd').type('button').onclick(onselect).text('24 uur'),
            $('button').class('abtn his').id('filter').type('button').onclick(onselect).text('Filter'),
            $('button').class('abtn r filter').id('alles').onclick(onselect).text('Alles'),
            $('button').class('abtn filter').id('alarm').checked('').onclick(onselect).text('Alarmen'),
            $('button').class('abtn filter').id('state').checked('').onclick(onselect).text('Statussen'),
            $('button').class('abtn filter').id('measurement').checked('').onclick(onselect).text('Meetwaarden'),
          ),
          $('div').class('aco col oa').style('height:0px;').append(
            $('table').append(
              $('thead').append(
                $('tr').append(
                  $('td').width(10),
                  $('td').width(160).text('Datum tijd'),
                  $('td').width(160).text('Tag'),
                  $('td').width(160).text('Tekst'),
                  $('td').text('Omschrijving'),
                  $('td').width(160).text('ACSM'),
                ),
              ),
              $.elemList = $('tbody')
            ),
          ),
        ),
      ),
      $('div').id('loadlog1'),
    );
  })
  .on('ready', event => {
    let items = $().value.map(item => $.Item.get(item));
    items.forEach(item => item.data.children = items.filter(child => child.data.MasterID === item.data.ID))
    const item = items[0];
    function list(children) {
      return $('ul').append(
        children.map(item => item.listElem = $('li').attr('open', item.data.children.length ? '0' : null).append(
          $('i').class('ln'),
          $('i').class('open').onclick(event => item.listElem.toggle()),
          $('div').class('symbol',item.id).onclick(function (event) {
            listDivs.forEach(elem => elem.removeAttribute('selected'))
            // console.log(event.target, this)
            this.setAttribute('selected', '');
            this.previousElementSibling.click();
            itemList = [];
            (function recursive(item) {
              itemList.push(item);
              if (item.data.children) {
                item.data.children.forEach(recursive);
              }
            })(item);
            writefilter(itemList);
          }).append(
            $('a').name(item.id),
            $('span').text(item.headerTitle),
            // item.detailID ? $('a').text(item.Title).href('#' + item.detailID) : $('span').text(item.Title),
          ),
          item.data.children.length ? list(item.data.children) : null,
        ))
      )
    }
    folders.append(list(item.data.children));
    const listDivs = [...folders.elem.getElementsByTagName('DIV')];
    const treeAttributes = 'connect,connecting,error_read,disconnect,error,CriticalFailure,NonCriticalFailure,Warning'.split(',');
    const hisElements = [...document.body.getElementsByClassName('his')];
    // console.log(Device.values())
    // return;
    // console.log(item)
    function writefilter(itemList) {
      hisElements.forEach(el => el.removeAttribute('checked'));
      document.getElementById(hisButtonId).setAttribute('checked', '');
      const attributes = itemList.filter(item => item instanceof Attribute)
      // .filter(item => !item.AttributeType || !AttributeTypeFilter[item.AttributeType] || AttributeTypeFilter[item.AttributeType].checked)
      // if (!item || itemList.indexOf(Number(item.id)) == -1) return;
      function path(item){
        for (var path = [], master = item; master && master.class !== 'dms_Group'; master = master.master) {
          path.push(master.Title);
        }
        return path;
      }
      $.elemList.text('');
      attributes.forEach(item => {
        // const value = 'TextualValue' in row ? Number(row.TextualValue) : (!row.values || !row.values.Value ? '#' : row.Value);
        // const enumValue = (item.Enum ? item.Enum.split(',')[value] : (isNaN(value) ? value : Math.round(value * 100) / 100)) || value;
        const value = 'TextualValue' in item ? Number(item.TextualValue) : (!item.values || !item.values.Value ? '#' : item.Value);
        const enumValue = (item.Enum ? item.Enum.split(',')[value] : (isNaN(value) ? value : Math.round(value * 100) / 100)) || value;
        $('tr')
        .parent($.elemList)
        .class(hisButtonId === 'actueel' ? item.id : '',AttributeTypeFilter[item.AttributeType] ? AttributeTypeFilter[item.AttributeType].filtertype || '' : '')
        .disabled(item.selected === 0)
        .value(value || 0)
        .append(
          $('td').class('symbol Value').value(item.Value || 0).attr(item.AttributeType, item.Value || 0),
          $('td').class('ModifiedDT').text(item.modifiedDT ? new Date(item.modifiedDT).toISOString().substr(0, 19).replace(/T/, ' ') : ''),
          $('td').text(path(item).reverse().join('.')),
          $('td').append(
            $('span').class('Value').text(enumValue),
            $('span').text(item.Unit || ''),
          ),
          $('td').text(item.Title || ''),
          $('td').text(item.AttributeType || ''),
        )
      })
      setTree();
    }
    setfilter = {
      select(checked, arr) { for (var attributeName in AttributeTypeFilter) if (arr.indexOf(AttributeTypeFilter[attributeName].filtertype) != -1) AttributeTypeFilter[attributeName].checked = checked; },
      actueel(selectedItem) {
        hisButtonId = 'actueel';
        const listData = [];
        (function getItemAttributes(item) {
          if (item.schema === 'Device') {
            return;
          }
          if (item.schema === 'Attribute') {
            listData.push(item);
          }
          if (item.data.children) {
            item.data.children.forEach(getItemAttributes);
          }
        })($().selectedItem = typeof selectedItem == 'object' ? selectedItem : $().selectedItem);
        console.log(listData);
        writefilter(listData);
      },
      history(filter, newHisButtonId) {
        hisButtonId = newHisButtonId || hisButtonId;
        new $().HttpRequest('../../api/v1/acsm').query({ weblog: 1, filter: filter }).get().then(event => {
          listData = [];
          event.data.forEach(row => {
            if (!row || !api.Attribute[row.id]) {
              return;
            }
            const attribute = api.Attribute[row.id];
            listData.push(Object.assign(row, {
              TextualValue: row.Value,
              Name: attribute.Name,
              Title: attribute.Title,
              Unit: attribute.Unit,
              Enum: attribute.Enum,
              StandardOutput: attribute.StandardOutput
            }));
          });
          writefilter(listData);
        })
      },
      uur1: () => setfilter.history('DATEDIFF(MINUTE, [LogDateTime], GETUTCDATE())<=60', 'uur1'),
      uur4: () => setfilter.history('DATEDIFF(MINUTE, [LogDateTime], GETUTCDATE())<=240', 'uur4'),
      uur24: () => setfilter.history('DATEDIFF(MINUTE, [LogDateTime], GETUTCDATE())<=1440', 'uur24'),
      filter() {
        hisButtonId = 'filter';
        function submit(event) {
          this.el.style.display = 'none';
          return false;
        };
        if (!this.el) {
          this.el = document.body.createElement('FORM', 'popupform col', {onsubmit: submit.bind(this) }, [
            ['DIV', 'row aco', [
              ['DIV', 'col aco', [
                ['DIV', 'Periode vanaf xxxxx:'],
                ['DIV', 'Selecteer datum:'],
                ['INPUT', {id: 'startDate', type: 'datetime-local', onchange: function () {
                  //endDate.value = new Date(new Date(this.value).setDate(new Date(this.value).getDate() + 1)).toISOString().substr(0, 10);
                }}]
              ]],
              ['DIV', 'col aco', [
                ['DIV', 'Periode Tot:'],
                ['DIV', 'Selecteer datum:'],
                ['INPUT', {id: 'endDate', type: 'datetime-local'}]
              ]],

            ]],
            ['DIV', 'row', [
              ['BUTTON', '', 'OK', { onclick() {
                setfilter.history("[LogDateTime]>='" + $().makeDateValue(startDate.value) + "' AND [LogDateTime]<'" + $().makeDateValue(endDate.value) + "'");
              }}],
              ['BUTTON', '', 'Cancel'],
            ]],
          ])
          startDate.focus();
        } else {
          this.el.style.display = '';
          startDate.focus();
        }
      },
      alles(checked) {
        for (var attributeName in AttributeTypeFilter) {
          AttributeTypeFilter[attributeName].checked = 1;
        }
        alarm.setAttribute('checked', '');
        state.setAttribute('checked', '');
        measurement.setAttribute('checked', '');
      },
      alarm(checked) {
        setfilter.select(checked, ['alarm']);
      },
      state(checked) {
        setfilter.select(checked, ['state']);
      },
      measurement(checked) {
        setfilter.select(checked, ['measurement']);
      },
    }
    function setTree() {
      Device.forEach((device, i) => {
        if (!device.values || !device.values.State) {
          return;
        }
        const state = device.values.State.value;
        if (['Connected','Disconnected'].includes(state)) {
          return;
        }
        device.data.children.forEach(setState = (child, i, children) => {
          if (child.detailID) {
            (function recursive (attribute) {
              attribute.State = state;
              attribute.children.forEach(recursive);
            })(items[child.detailID]);
          }
          child.children.forEach(setState);
        })
      });
      // kan sneller
      // [...folders.getElementsByTagName('DIV')].forEach(el => {
      //   treeAttributes.forEach(State => el.removeAttribute(state) );
      // })
      if ($.Item.get.Attribute) {
        $.Item.get.Attribute.forEach(attribute =>{
          if (attribute.elTR && attribute.elTR.parentElement) {
            attribute.elTR.setAttribute('state', attribute.State);
          }
          for (var parent = attribute; parent; parent = parent.master) {
            if (parent.elDIV && String(attribute.State)) {
              parent.elDIV.setAttribute(attribute.State, Number(parent.elDIV.getAttribute(attribute.State)) + 1);
            }
          }
          const attributeType = AttributeTypeFilter[attribute.AttributeType];
          if (!attributeType || !attributeType.stateButton || attribute.Value !== 1) {
            return;
          }
          const stateAttributeName = attributeType.stateButton;
          for (var parent = attribute; parent; parent = parent.master) {
            if (parent.elDIV) {
              parent.elDIV.setAttribute(stateAttributeName, Number(parent.elDIV.getAttribute(stateAttributeName)) + 1);
            }
          }
        });
      }
    }
    setfilter.actueel(item);
    setTree();
  })
  setInterval(event => elemTime.text('UTC time: ' + new Date().toISOString().substr(0, 19).replace(/T/, ' ')), 1000);
})();
