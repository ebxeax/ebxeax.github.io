from unicodedata import name
from nbformat import write
import requests, datetime
from apscheduler.schedulers.blocking import BlockingScheduler
def get_html(url): #爬取源码函数
    headers = {
        'User-Agent': 'Mozilla/5.0(Macintosh; Intel Mac OS X 10_11_4)\
        AppleWebKit/537.36(KHTML, like Gecko) Chrome/52 .0.2743. 116 Safari/537.36'

    }  # 模拟浏览器访问
    response = requests.get(url, headers=headers)  # 请求访问网站
    response.encoding = response.apparent_encoding #设置字符编码格式
    html = response.text  # 获取网页源码
    return html  # 返回网页源码




def record():
    ret = get_html(url)
    t = datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')
    f = open('./log.txt', 'a', encoding='utf-8')
    write_item = ret + ':' + t + '\n'
    f.write(write_item)
    print(write_item)
    f.close()

def APschedulerMonitor():
  # 创建调度器：BlockingScheduler
  scheduler = BlockingScheduler()
  scheduler.add_job(record, 'interval', seconds=60, id='get_click_nxu408')
  scheduler.start()

if __name__ == '__main__':
    url = 'https://xxgc.nxu.edu.cn/system/resource/code/news/click/dynclicks.jsp?clickid=2591&owner=1804930476&clicktype=wbnews'
    APschedulerMonitor()


