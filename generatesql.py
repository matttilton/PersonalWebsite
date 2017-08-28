from os import listdir
from os.path import isfile, join
onlyfiles = [f for f in listdir('C:/media/media') if isfile(join('C:/media/media', f))]
files = [w.replace('.mp4', '') for w in onlyfiles]

onlyfiles = [w.replace('S0', '') for w in onlyfiles]
onlyfiles = [w.replace('E0', ' ') for w in onlyfiles]
onlyfiles = [w.replace('& ', '') for w in onlyfiles]
onlyfiles = [w.replace('.mp4', '') for w in onlyfiles]
onlyfiles = [w.replace('- ', '') for w in onlyfiles]
onlyfiles = [w.replace('E', ' ') for w in onlyfiles]
onlyfiles = [w.replace('nemy', 'Enemy') for w in onlyfiles]
onlyfiles = [w.split(' ') for w in onlyfiles]
# print(onlyfiles)
counter = 0
file = open("generatedsql.sql", "w")
for each in onlyfiles:
    sql = ''
    sql = sql + 'INSERT Into episodes (`show`, `season`, `number`, `name`, `location`, `url`) values (1, ' + each[2] + ', ' + each[3] + ', '
    length = len(each)
    count = 4
    name = ''
    while count < length:
        name = name + each[count] + ' '
        count = count + 1
    
    sql = sql + '"' + name.strip() + '", "' + 'C:\\\\media\\\\media\\\\' + files[counter] + '", "' + each[0] + each[1] + 'S0' + each[2]
    if len(each[3]) == 1:
        sql = sql + 'E0'
    else:
        sql = sql + 'E'
    sql = sql + each[3] + '");'
    file.write(sql + '\n')
    # print(sql)
    counter = counter + 1

file.close()