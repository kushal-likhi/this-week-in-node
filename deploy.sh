echo "***************DEPLOYING THIS WEEK IN NODE********************"
echo `pwd`
echo `date`
echo $USER
@author Kushal Likhi
echo "**************************************************************"

. ../credentials

out_file="`pwd`/node.out";
pid_file="`pwd`/APP_PID"

echo "[DEPLOY] Killing old instance of app..."
#pkill -u $USER node
kill -9 `cat $pid_file`

export MAILGUN_USER=$MG_USER
export MAILGUN_PASS=$MG_PASS
export NODE_ENV="production"

cd blog_platform
pwd

echo "[DEPLOY] INSTALLING DEPENDENCIES"
npm install --production

echo "[DEPLOY] Starting up..."
nohup node index > $out_file 2>&1&

PID=`ps -eaf | grep node\ index | head -1 | awk '{print $2}'`

echo $PID > $pid_file
echo "PID: "`cat $pid_file`

out_file_real=`echo $(cd $(dirname $out_file); pwd)/$(basename $out_file)`
cd ..
pwd

echo "[DEPLOY] Complete!"
echo "[DEPLOY] Logs going to file $out_file_real"