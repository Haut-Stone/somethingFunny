/*
* Created by ShiJiahuan(li) in haut.
* for more please visit www.shallweitalk.com
* 
* Copyright 2016 SJH. All rights reserved.
*
* @Author: Haut-Stone
* @Date:   2017-01-03 13:04:38
* @Last Modified by:   Haut-Stone
* @Last Modified time: 2017-01-03 17:37:12
*/
//只可惜Mac上用不了。。
#include <iostream>
#include <cstdio>
#include <algorithm>
#include <cmath>
#include <cstring>
#include <cstdlib>
using namespace std;


int main(void)
{
	int x = 1;
	int y = 10;
	for (x=1;x<10;x++){
		system("cls");
		for (int i = 0; i < x; ++i)
		{
			printf("\n");
		}
		for (int i = 0; i < y; ++i)
		{
			printf(" ");
		}
		printf("o\n");
	}
    return 0;
}