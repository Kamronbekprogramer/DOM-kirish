document.getElementById('wordForm').addEventListener('submit', function(e) {
    e.preventDefault(); 
    var text = document.getElementById('textInput').value;
    var words = text.split(/\s+/);
    var wordCount = words.length;

    alert('So\'zlar soni: ' + wordCount + ' ta');
});