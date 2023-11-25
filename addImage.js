let mini_articles = document.getElementsByClassName("main__small-articles__article__image");
for (let i = 0; i < mini_articles.length; i++) {
    mini_articles[i].style.backgroundImage = `url(../images/blog-images/blog-images-mini/small_${i+1}.png)`;
    mini_articles[i].style.backgroundSize = 'cover';
    mini_articles[i].style.backgroundPosition = 'center';

}