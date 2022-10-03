window.onload = function() {
    let content = document.querySelector('.content');

    function setBackgroundColor() {
        let color = document.querySelectorAll('.btn-backgroundColor');
        for (index of color){
            index.addEventListener('click', function(event){
                content.style.backgroundColor = event.target.innerHTML; 
                localStorage.setItem('backgroundColor', event.target.innerHTML);
            });
        };    
    };

    setBackgroundColor();

    let p = document.querySelector('.paragraph');

    function setTextColor() {
        let textColor = document.querySelectorAll('.text-color');
        for (index of textColor){
            index.addEventListener('click', function(event){
                p.style.color = event.target.innerHTML;
                localStorage.setItem('textColor', event.target.innerHTML);
            });
        };
    };

    setTextColor();

    function setFontSize() {
        let fontElement = document.querySelectorAll('.font-sizes');
        for (index of fontElement){
            index.addEventListener('click', function(event){
                p.style.fontSize = event.target.innerHTML;
                localStorage.setItem('fontSize', event.target.innerHTML);
            });
        };
    };

    setFontSize();

    function setLineHeight() {
        let lineElementHeight = document.querySelectorAll('.line-heights');
        for (index of lineElementHeight){
            index.addEventListener('click', function(event){
                p.style.lineHeight = event.target.innerHTML;
                localStorage.setItem('lineHeight', event.target.innerHTML);
            });
        };
    };

    setLineHeight();

    function setFontFamily() {
        let lineElementHeight = document.querySelectorAll('.font-familys');
        for (index of lineElementHeight){
            index.addEventListener('click', function(event){
                p.style.fontFamily = event.target.innerHTML;
                localStorage.setItem('fontFamily', event.target.innerHTML);
            });
        };
    };

    setFontFamily();

    let backgroundColorSaved = localStorage.getItem('backgroundColor');
    content.style.backgroundColor = backgroundColorSaved;

    let textColor = localStorage.getItem('textColor');
    p.style.color = textColor;

    let fontSizeSaved = localStorage.getItem('fontSize');
    p.style.fontSize = fontSizeSaved;

    let lineHeightSaved = localStorage.getItem('lineHeight');
    p.style.lineHeight = lineHeightSaved;

    let fontFamilySaved = localStorage.getItem('fontFamily');
    p.style.fontFamily = fontFamilySaved;
}
