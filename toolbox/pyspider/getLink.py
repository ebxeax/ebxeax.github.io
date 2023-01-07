import requests
r=requests.get("https://www.erome.com/a/imZapSyk")
demo=r.text
from bs4 import BeautifulSoup
soup=BeautifulSoup(demo,"html.parser")
for link in soup.find_all('a'):
	print(link.get('href'))