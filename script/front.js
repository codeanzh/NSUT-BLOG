flag = 0;
blogCount = 0;
postCount = 0;

function popMenu()
{
	if(flag == 0)
	{
		flag = 1;
		document.getElementById('name').style.display = 'inline-block';
		document.getElementsByClassName('content')[0].className = 'content-clicked';
		document.getElementsByClassName('profile')[0].style.backgroundColor = '#e6f2ae';
		document.getElementsByClassName('profile')[0].style.width = '100%';
		document.getElementById('menu').className = 'fas fa-angle-double-left';
		document.getElementById('setting').style.display = 'inline-block';
	}
	else
	{
		flag = 0;
		document.getElementById('name').style.display = 'none';
		document.getElementsByClassName('content-clicked')[0].className = 'content';
		document.getElementsByClassName('profile')[0].style.backgroundColor = 'white';
		document.getElementsByClassName('profile')[0].style.width = '';
		document.getElementById('menu').className = 'far fa-address-card';
		document.getElementById('setting').style.display = 'none';
	}
}

function blogNext()
{
	if(blogCount == 0)
	{
		back = document.getElementById('blog-back');
		blog1 = document.getElementById('blog-1');
		blog2 = document.getElementById('blog-2');
		blog3 = document.getElementById('blog-3');
		next = document.getElementById('blog-next');
		back.style.display = 'inline-block';
		back.style.backgroundImage = "url('src/competitive-programmer.jpg')";
		blog1.style.backgroundImage = "url('src/deep-learning.jpeg')";
		blog1.innerHTML = blog2.innerHTML;
		blog2.style.backgroundImage = "url('src/brain.jpg')";
		blog2.innerHTML = blog3.innerHTML;
		blog3.style.backgroundImage = "url('src/web-developer.jpg')";
		blog3.innerHTML = 'web-developer';
		next.style.backgroundImage = "url('src/instagram-hashtags.jpg')";
		next.style.width = '5.5%';
		blogCount++;
	}
	else if(blogCount == 1)
	{
		back = document.getElementById('blog-back');
		blog1 = document.getElementById('blog-1');
		blog2 = document.getElementById('blog-2');
		blog3 = document.getElementById('blog-3');
		next = document.getElementById('blog-next');
		back.style.backgroundImage = blog1.style.backgroundImage;
		blog1.style.backgroundImage = blog2.style.backgroundImage;
		blog1.innerHTML = blog2.innerHTML;
		blog2.style.backgroundImage = blog3.style.backgroundImage;
		blog2.innerHTML = blog3.innerHTML;
		blog3.style.backgroundImage = next.style.backgroundImage;
		blog3.innerHTML = 'instagram-hashtags';
		next.style.backgroundImage = "url('src/app.jpg')";
		blogCount++;
	}
	else
	{
		back = document.getElementById('blog-back');
		blog1 = document.getElementById('blog-1');
		blog2 = document.getElementById('blog-2');
		blog3 = document.getElementById('blog-3');
		next = document.getElementById('blog-next');
		back.style.width = '12%';
		back.style.backgroundImage = blog1.style.backgroundImage;
		blog1.style.backgroundImage = blog2.style.backgroundImage;
		blog1.innerHTML = blog2.innerHTML;
		blog2.style.backgroundImage = blog3.style.backgroundImage;
		blog2.innerHTML = blog3.innerHTML;
		blog3.style.backgroundImage = next.style.backgroundImage;
		blog3.innerHTML = 'App-Development';
		next.style.display = 'none';
		blogCount++;
	}
}

function blogBack()
{
	if(blogCount == 3)
	{
		back = document.getElementById('blog-back');
		blog1 = document.getElementById('blog-1');
		blog2 = document.getElementById('blog-2');
		blog3 = document.getElementById('blog-3');
		next = document.getElementById('blog-next');
		next.style.display = 'inline-block';
		next.style.width = '5.5%';
		next.style.backgroundImage = blog3.style.backgroundImage;
		blog3.style.backgroundImage = blog2.style.backgroundImage;
		blog3.innerHTML = blog2.innerHTML;
		blog2.style.backgroundImage = blog1.style.backgroundImage;
		blog2.innerHTML = blog1.innerHTML;
		blog1.style.backgroundImage = back.style.backgroundImage;
		blog1.innerHTML = 'Beautiful-Brain';
		back.style.backgroundImage = "url('src/deep-learning.jpeg')";
		back.style.width = '5.5%';
		blogCount--;
	}
	else if(blogCount == 2)
	{
		back = document.getElementById('blog-back');
		blog1 = document.getElementById('blog-1');
		blog2 = document.getElementById('blog-2');
		blog3 = document.getElementById('blog-3');
		next = document.getElementById('blog-next');
		next.style.backgroundImage = blog3.style.backgroundImage;
		blog3.style.backgroundImage = blog2.style.backgroundImage;
		blog3.innerHTML = blog2.innerHTML;
		blog2.style.backgroundImage = blog1.style.backgroundImage;
		blog2.innerHTML = blog1.innerHTML;
		blog1.style.backgroundImage = back.style.backgroundImage;
		blog1.innerHTML = 'Deep Learning and AI';
		back.style.backgroundImage = "url('src/competitive-programmer.jpg')";
		blogCount--;
	}
	else
	{
		back = document.getElementById('blog-back');
		blog1 = document.getElementById('blog-1');
		blog2 = document.getElementById('blog-2');
		blog3 = document.getElementById('blog-3');
		next = document.getElementById('blog-next');
		next.style.width = '12%';
		next.style.backgroundImage = blog3.style.backgroundImage;
		blog3.style.backgroundImage = blog2.style.backgroundImage;
		blog3.innerHTML = blog2.innerHTML;
		blog2.style.backgroundImage = blog1.style.backgroundImage;
		blog2.innerHTML = blog1.innerHTML;
		blog1.style.backgroundImage = back.style.backgroundImage;
		blog1.innerHTML = 'Competitive Programming for Industrialists';
		back.style.display = 'none';
		blogCount--;
	}
}

function change(color, id)
{
	document.getElementsByClassName('post')[0].style.backgroundColor = color;
	document.getElementsByClassName('top-info-current')[0].className = 'top-info';
	document.getElementById(id).className = 'top-info-current';
}

function collegeLife(){change('#f2838c', 'college-life');}

function projectsLife(){change('#eff283', 'dev');}

function competitiveProgramming(){change('#87d4fa', 'cp');}

function alumniLife(){change('#9de887', 'alu');}

function recomendedLife(){change('#9b6be8', 'recomended');}