# DESCRIPTION

UnZip, Check, Repeat

Code to Generate the Zip Files:
```py copy
from zipfile import ZipFile

zipObj = ZipFile('Zipped0.zip', 'w')
zipObj.write('flag.txt')
for i in range(1,250):
    zipObj = ZipFile('Zipped'+str(i)+'.zip', 'w')
    zipObj.write('Zipped'+str(i-1)+'.zip')
    zipObj.close()
```

<b>Link:</b> [Never Give Up](https://nevergiveup.vercel.app/1.html)
