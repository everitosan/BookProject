
if [ ! -d "./.tmp" ]; then
  echo 'BOWER INSTALL'
  bower install
fi

if [ ! -d "./.tmp/public/min" ]; then
  echo 'GRUNT PROD'
	grunt prod 
fi

sails lift 