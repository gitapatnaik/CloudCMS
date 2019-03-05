(function() {

    /**
     * Supports configuration like this:
     *
     * {
     * }
     */

    var CKEDITOR = window.CKEDITOR;

   CKEDITOR.replace( 'brandawardtext',
	{
		on :
		{
			instanceReady : function( ev )
			{
				// Output paragraphs as <p>Text</p>.
				this.dataProcessor.writer.setRules( 'p',
					{
						indent : false,
						breakBeforeOpen : true,
						breakAfterOpen : false,
						breakBeforeClose : false,
						breakAfterClose : true
					});
			}
		}
	});

})();



