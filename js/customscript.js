


	//Handles sign-in menu drop down
    $('#dropdown-menu').find('form').click(function (e) {
        e.stopPropagation();
    });

    $('.dropdown-toggle').dropdown();

	 var navListItems = $('div.setup-panel div a'),
          allWells = $('.setup-content'),
          allNextBtn = $('.nextBtn');

  allWells.hide();

  navListItems.click(function (e) {
      e.preventDefault();
      var $target = $($(this).attr('href')),
              $item = $(this);

      if (!$item.hasClass('disabled')) {
          navListItems.removeClass('btn-primary').addClass('btn-default');
          $item.addClass('btn-primary');
          allWells.hide();
          $target.show();
          $target.find('input:eq(0)').focus();
      }
  });

  //unused function currently-Just keeping for further use later
	function clearTable()
	{
	 var tableRef = document.getElementById('table_body');
	 while ( tableRef.rows.length > 0 )
	 {
	  tableRef.deleteRow(0);
	 }

	 var tableRef2 = document.getElementById('table_body2');
	 while ( tableRef2.rows.length > 0 )
	 {
	  tableRef2.deleteRow(0);
	 }

	 var tableRef3 = document.getElementById('table_body3');
	 while ( tableRef3.rows.length > 0 )
	 {
	  tableRef3.deleteRow(0);
	 }

	 var tableRef4 = document.getElementById('table_body4');
	 while ( tableRef4.rows.length > 0 )
	 {
	  tableRef4.deleteRow(0);
	 }

	 var tableRef5 = document.getElementById('table_body5');
	 while ( tableRef5.rows.length > 0 )
	 {
	  tableRef5.deleteRow(0);
	 }

	 var tableRef6 = document.getElementById('table_body6');
	 while ( tableRef6.rows.length > 0 )
	 {
	  tableRef6.deleteRow(0);
	 }

	 var tableRef7 = document.getElementById('table_body7');
	 while ( tableRef7.rows.length > 0 )
	 {
	  tableRef7.deleteRow(0);
	 }

	 var tableRef8 = document.getElementById('table_body8');
	 while ( tableRef8.rows.length > 0 )
	 {
	  tableRef8.deleteRow(0);
	 }
 };
