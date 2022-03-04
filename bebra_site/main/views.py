from django.shortcuts import render


def index(request):
    data = {'title': 'Главная страница',
            'values': ["No friends in the industry", 'I had to draw the line between']}
    return render(request, 'main/index.html', data)


def about(request):
    return render(request, 'main/about.html')


def news(request):
    return render(request, 'news/news_home.html')


def test1(request):
    return render(request, 'main/test1.html')


def test2(request):
    return render(request, 'main/test2.html')

def main_test(request):
    return render(request, 'main/main_test.html')