# -*- coding: utf-8 -*-
# @Author: Haut-Stone
# @Date:   2017-08-24 22:22:35
# @Last Modified by:   Haut-Stone
# @Last Modified time: 2017-08-24 22:45:45

import requests
from bs4 import BeautifulSoup 
from http import cookiejar
import time


class LoginNetwork():

	def request(self, url, username, password):
		headers = {
			'User-Agent':'Mozilla/5.0',
			'Host':'172.16.154.130:804',
			'Referer':'http://172.16.154.130:804/srun_portal_pc.php?ac_id=1&',
		}
		data = {
			'action':'login',
			'username':username,
			'password':password,
			'ac_id':'1',
			'user_ip':'',
			'nas_ip':'',
			'user_mac':'',
			'save_me':'0',
			'ajax':'1'
		}
		try:
			r = requests.post(url, headers=headers, data=data, timeout=2)
			r.raise_for_status()
			return r
		except:
			print('你死了，并没有转生。。。。= = 这就很尴尬了，年轻人。')

	def Chanting(self):
		print('哇！我是慧慧，你就是要前往异世界的勇者吧！')
		print('让我用魔法为你打开异世界大门吧！')
		time.sleep(0.2)
		print()
		print('吾名惠惠')
		print('我が名はめぐみん')
		time.sleep(0.2)
		print()
		print('红魔族第一的魔法师')
		print('紅魔族随一の魔法の使い手にして')
		time.sleep(0.2)
		print()
		print('兼爆裂魔法的操纵者')
		print('爆裂魔法を操りし者')
		time.sleep(0.2)
		print()
		print('好好见识我的力量吧 ')
		print('我が力、見るが良い！')
		time.sleep(0.2)
		print()
		print('Explosion!!!!!!')
		print()

	def login(self, username, password):
		url = 'http://172.16.154.130:804/include/auth_action.php'
		response = self.request(url, username, password)
		if response == None:
			print('想转生要多氪金啊！')
		else:
			if response.headers['Content-Length'] == '0':
				print('（≧∇≦）バイバイ...')
			elif response.headers['Content-Length'] == '39':
				print('咦， 勇者你的异世界通行证是不是有错误啊？')
				print('再去检查一下吧')

			else:
				self.Chanting()
				print('现在是异世界时间')
				print(time.asctime(time.localtime(time.time())))
				print('欢迎来到异世界')

a = LoginNetwork()
a.login(username='201616010413',password='wnb-veE-d9v-ZZ5')
