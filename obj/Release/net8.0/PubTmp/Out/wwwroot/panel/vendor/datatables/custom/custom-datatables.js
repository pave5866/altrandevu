// Basic DataTable
$(function () {
	$('#basicExample').DataTable({
		'iDisplayLength': 20,  // Varsay�lan sayfa ba��na g�sterilecek kay�t say�s�
		"language": {
			"sDecimal": ",",
			"sEmptyTable": "Tabloda herhangi bir veri mevcut de�il",
			"sInfo": "_TOTAL_ kay�ttan _START_ - _END_ aras�ndaki kay�tlar g�steriliyor",
			"sInfoEmpty": "Kay�t yok",
			"sInfoFiltered": "(_MAX_ kay�t i�erisinden bulunan)",
			"sInfoPostFix": "",
			"sInfoThousands": ".",
			"sLengthMenu": "Sayfada _MENU_ kay�t g�ster",
			"sLoadingRecords": "Y�kleniyor...",
			"sProcessing": "��leniyor...",
			"sSearch": "Ara:",
			"sZeroRecords": "E�le�en kay�t bulunamad�",
			"oPaginate": {
				"sFirst": "�lk",
				"sLast": "Son",
				"sNext": "Sonraki",
				"sPrevious": "�nceki"
			},
			"oAria": {
				"sSortAscending": ": artan s�tun s�ralamas�n� aktifle�tir",
				"sSortDescending": ": azalan s�tun s�ralamas�n� aktifle�tir"
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
