// mlab_popup.js v1.0.0, 15.12.2014
// Copyright (c) 2014 Magneticlab (http://www.magneticlab.ch)

jQuery(document).ready(function(){
	
	jQuery('#preview_help').hide();	
	
/*	if ( jQuery( "#wp-popup_text-wrap" ).hasClass( "tmce-active" ) ) {
		 jQuery( '#mlab_popup_preview' ).prop('disabled', true); 
		 jQuery( '#preview_help' ).show();		
	}*/
							   		   
	//Close Popups and Fade Layer
	jQuery( '.mlab-close' ).on( 'click', function() {
		//When clicking on the close or fade layer...
	  	jQuery( '.mlab-modal' ).fadeOut( function() {
			 jQuery( '#mlab-modal-backdrops' ).hide();  
		}); //fade them both out		
		return false;
	});
	
	// Preview function in admin page
	jQuery('#mlab_popup_preview').on('click', function() { 
		//reset
		jQuery('.mlab-modal-title').html('');
		jQuery('.mlab-modal-body').html('');
		jQuery('.mlab-modal-label').val('');
		jQuery('.mlab-modal-link').attr("href", "#")
		jQuery( '.mlab-modal-footer' ).hide();
		//get		
		var titre = jQuery('#popup_titre').attr( 'value' );
		var text  = jQuery('#popup_text').val(); 
		var width = jQuery('#popup_width').attr( 'value' ); 
		var label = jQuery('#popup_label').attr( 'value' ); 
		var url = jQuery('#popup_link').attr( 'value' );  
		//set
		if ( url.length > 0 && label.length > 0){ 
			jQuery( '.mlab-modal-footer' ).show(); 			
		}
		jQuery('.mlab-modal-title').html( titre );
		jQuery('.mlab-modal-body').html( text ); 
		jQuery('.mlab-modal-dialog').css( "width", width+'px' );
		jQuery('.mlab-modal-label').val(label);
		jQuery('.mlab-modal-link').attr("href", url) 
		jQuery('.mlab-modal').fadeIn(); 
	}); 
	
	if ( jQuery( '#mlab_popup_preview' ).is( ':disabled' ) == true ){ 
			jQuery( '#mlab_popup_preview' ).prop( 'disabled', false );
			jQuery( '#preview_help' ).hide(); 	
		}
	
	// Preview only available on text editor	
	jQuery('#popup_text-tmce').on('click', function() {			 
		if ( jQuery('#mlab_popup_preview').is(':disabled') == false ){ 
			jQuery('#mlab_popup_preview').prop('disabled', true); 
			jQuery('#preview_help').show();	
		} 
	}); 
	
	// Preview only available on text editor	
	jQuery('#popup_text-html').on('click', function() {		 
		if ( jQuery( '#mlab_popup_preview' ).is( ':disabled' ) == true ){ 
			jQuery( '#mlab_popup_preview' ).prop( 'disabled', false );
			jQuery( '#preview_help' ).hide();
		} 
	}); 
	
	// Preview image from new src in admin page
	function readURL(input) {
		if (input.files && input.files[0]) {
			var reader = new FileReader();
			
			reader.onload = function (e) {
				jQuery("#preview_image").attr("src", e.target.result);
			}
			reader.readAsDataURL(input.files[0]);
		}
	}

	jQuery("#popup_img").change(function(){
		readURL(this);
	});
	
});


