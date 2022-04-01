var today = new Date();
var date = today.getDate()+'/'+(today.getMonth() + 1)+'/'+(today.getFullYear() - 2000);

var allArticles = document.getElementsByClassName('ArticlePreview');
var i;
for(i = 0; i < allArticles.length; i++)
{
    var articleDate = allArticles[i].children[0].children[1].innerHTML;
    var articleDate1 = (parseInt(articleDate.charAt(0)) + 1)+articleDate.charAt(1)+articleDate.charAt(2)+articleDate.charAt(3)+articleDate.charAt(4)+articleDate.charAt(5);
    console.log(articleDate1);
    if(articleDate == date || articleDate1 == date)
    {
        allArticles[i].children[0].children[2].style.display = 'block';
    }
}