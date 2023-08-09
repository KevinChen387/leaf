document.write(`
<style>
@font-face {
    font-family: product sans;
    src: url("/fonts/product_sans/Product-Sans-Regular-2.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: product sans;
    src: url("/fonts/product_sans/Product-Sans-Bold-3.ttf") format("truetype");
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: product sans;
    src: url("/fonts/product_sans/Product-Sans-Italic-4.ttf") format("truetype");
    font-weight: normal;
    font-style: italic;
}

@font-face {
    font-family: product sans;
    src: url("/fonts/product_sans/Product-Sans-Bold-Italic-5.ttf") format("truetype");
    font-weight: bold;
    font-style: italic;
}

@font-face {
    font-family:Calibri;
    src: url("/fonts/calibri.ttf") format("truetype");
}

body {
    font-family: Product Sans;
}
</style>

<!--Quick visit-->
<p>
    <div size="4" style="float:left">
        <img src="images/leaf.svg" width="15" height="15" /> Leaf!
    </div>

    <div style="float:right">
    <form>
        <select onchange="page(this)";language="javascript"
        style="width:100; height:24">
            <option>Select</option>
            <option value="index.html">Main&ensp;Page</option>
            <option value="https://www.google.com">Google</option>
            <option value="https://www.bing.com">Bing</option>
            <option value="https://www.wikipedia.org">Wikipedia</option>
            <option value="https://github.com">GitHub</option>
            <option value="https://outlook.live.com">Outlook</option>
            <option value="https://mail.163.com">163 Mail</option>
        </select>

        <script language="javascript">
        function page(s){
            var d = s.options[s.selectedIndex].value;
            window.location.href = d;
            s.selectedIndex = 0;
        }
        </script>
    </form>
    </div>

    <div style="float:right">
    Quick&ensp;Visit:&ensp;
    </div>
</p>
`);