// Basic DataTable
$(function () {
	$('#basicExample').DataTable({
		'iDisplayLength': 20,  // Varsayýlan sayfa baþýna gösterilecek kayýt sayýsý
		"language": {
			"sDecimal": ",",
			"sEmptyTable": "Tabloda herhangi bir veri mevcut deðil",
			"sInfo": "_TOTAL_ kayýttan _START_ - _END_ arasýndaki kayýtlar gösteriliyor",
			"sInfoEmpty": "Kayýt yok",
			"sInfoFiltered": "(_MAX_ kayýt içerisinden bulunan)",
			"sInfoPostFix": "",
			"sInfoThousands": ".",
			"sLengthMenu": "Sayfada _MENU_ kayýt göster",
			"sLoadingRecords": "Yükleniyor...",
			"sProcessing": "Ýþleniyor...",
			"sSearch": "Ara:",
			"sZeroRecords": "Eþleþen kayýt bulunamadý",
			"oPaginate": {
				"sFirst": "Ýlk",
				"sLast": "Son",
				"sNext": "Sonraki",
				"sPrevious": "Önceki"
			},
			"oAria": {
				"sSortAscending": ": artan sütun sýralamasýný aktifleþtir",
				"sSortDescending": ": azalan sütun sýralamasýný aktifleþtir"
			}
		}
	});
});



// FPrint/Copy/CSV
$(function(){
	$('#copy-print-csv').DataTable( {
		dom: 'Bfrtip',
		buttons: [
			'copyHtml5',
			'excelHtml5',
			'csvHtml5',
			'pdfHtml5',
			'print'
		],
		'pageLength': 20,
	});
});


// Fixed Header
$(document).ready(function(){
	var table = $('#fixedHeader').DataTable({
		fixedHeader: true,
		'iDisplayLength': 20,
		"language": {
			"lengthMenu": "Display _MENU_ Records Per Page",
			"info": "Showing Page _PAGE_ of _PAGES_",
		}
	});
});


// Vertical Scroll
$(function(){
	$('#scrollVertical').DataTable({
		"scrollY": "207px",
		'iDisplayLength': 20,
		"scrollCollapse": true,
		"paging": false,
		"bInfo" : false,
	});
});



// Row Selection
$(function(){
	$('#rowSelection').DataTable({
		'iDisplayLength': 20,
		"language": {
			"lengthMenu": "Display _MENU_ Records Per Page",
			"info": "Showing Page _PAGE_ of _PAGES_",
		}
	});
	var table = $('#rowSelection').DataTable();

	$('#rowSelection tbody').on( 'click', 'tr', function () {
		$(this).toggleClass('selected');
	});

	$('#button').on('click', function () {
		alert( table.rows('.selected').data().length +' row(s) selected' );
	});
});



// Highlighting rows and columns
$(function(){
	$('#highlightRowColumn').DataTable({
		'iDisplayLength': 20,
		"language": {
			"lengthMenu": "Display _MENU_ Records Per Page",
		}
	});
	var table = $('#highlightRowColumn').DataTable();  
	$('#highlightRowColumn tbody').on('mouseenter', 'td', function (){
		var colIdx = table.cell(this).index().column;
		$(table.cells().nodes()).removeClass('highlight');
		$(table.column(colIdx).nodes()).addClass('highlight');
	});
});



// Using API in callbacks
$(function(){
	$('#apiCallbacks').DataTable({
		'iDisplayLength': 20,
		"language": {
			"lengthMenu": "Display _MENU_ Records Per Page",
		},
		"initComplete": function(){
			var api = this.api();
			api.$('td').on('click', function(){
			api.search(this.innerHTML).draw();
		});
		}
	});
});


// Hiding Search and Show entries
$(function(){
	$('#hideSearchExample').DataTable({
		'iDisplayLength': 20,
		"searching": false,
		"language": {
			"lengthMenu": "Display _MENU_ Records Per Page",
			"info": "Showing Page _PAGE_ of _PAGES_",
		}
	});
});
