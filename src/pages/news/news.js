var today = new Date();
var date = today.getDate()+'/'+(today.getMonth() + 1)+'/'+(today.getFullYear() - 2000);
var date1 = (today.getDate() + 1)+'/'+(today.getMonth() + 1)+'/'+(today.getFullYear() - 2000);

var allArticles = document.getElementsByClassName('ArticlePreview');
var i;
for(i = 0; i < allArticles.length; i++)
{
    var articleDate = allArticles[i].children[0].children[1].innerHTML;
    if(articleDate == date || articleDate == date1)
    {
        allArticles[i].children[0].children[2].style.display = 'block';
    }
}