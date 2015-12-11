import os
from flask import Flask, request
from flask import render_template
from pytube import YouTube
import urllib
import urllib2
import requests

from pprint import pprint

app = Flask(__name__)
# yt = YouTube("https://www.youtube.com/watch?v=hN6K9UwEsAU")


@app.route('/')
def hello():
    url = '';
    if request.query_string:
        url = request.query_string
        url = url[5:]
        url = urllib.unquote(url)
    else:
        return 'This is not a valid youtube URL'

    yt = YouTube(url);
    pprint(yt.filename)
    qual = 'mp4'
    if qual == 'flv':
        video = yt.filter('flv')[-1]
    else:
        if qual == 'mp4':
            video = yt.filter('mp4')[-1]
    success = video.download('')


    jquery = '<script src = "/static/jquery-1.11.3.js"></script>'
    downloadScript = '<script src = "/static/download.js"></script>'
    success = jquery + '\n' + downloadScript + '\n' + '<a download = "success.mp4" id = "URI" href= ' + success + '>' 'Download</a>'
    return success
    #
    # if success:
    #     requests.post('', data=success)
    #     return 'success'
    # else:
    #     return 'fail'


if __name__ == '__main__':
    app.debug = True
    app.run()