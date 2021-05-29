## rawdata_api 🏫 
![imagen](https://user-images.githubusercontent.com/57901401/120082770-c5ba2100-c092-11eb-9793-2a94aa76c3f5.png)

#### Tecnologies
- nodejs, express, morgan, postgres, sequelize, insomnia

#### Configuration files 
-config_files/server_config.js 
			
		-module.exports = {
			protocol: 'http',
			hostname: 'localhost:3000',
			port: 3000,
			host:'localhost',
			bd_name:'universitydb',
			bd_user:'postgres',
			bd_user_pass:''
		}

#### Input files
-sql/db.sql file with the database schema. It includes model and data. A database backup can be found at sql/backup.sql. Further data can be added using the API. Insomnia tool can be used to send data to the API.

#### Output files
-A file (file/raw_data/{entityname_in_plural}.json) for each entity. It should be created the files/raw_data directory.

#### Objectives
-To manage raw data related to university. In this case, data related to university courses.

#### Explanation
-This component is a REST API with a model-view-controller architecture. The entrypoint is the src/index.js file, which calls the src/app.js file where in turn, prefixes of each module of the API are set up. Routes are defined in the src/routes directory while controllers are defined in src/controller. Moreover, models are stored in the src/models directory. As Object Relational Mapping (ORM), Sequelize for PostgreSQL on NodeJS was used.

-Every database entity has one column called "uri" to ease the transformation to linked data. URI assignation process to entities should be carried out as a previous process. Entity uris can be changed like any other entity column. One module is created per each kind of entity.

-The component was prepared to manage data related to courses, such as universities, teaching methods, teachers, subjects, students, rooms, materials, languages, faculties, departments, buildings, assessment methods and academic terms.

-All datasets of raw data can be reached by clicking the home page http://{hostname}/api. The URL template of each module is http://{hostname}/api/{entityname_in_plural}, e.g http://localhost:3000/api/universities.

-Output files are updated every time one entity is changed (post, put, and delete actions). These files are also updated via specific URL: http://{hostname}/api/saveOther (http://localhost:3000/api/saveOther) to update others than courses and http://{hostname}/api/saveCourses (http://localhost:3000/api/saveCourses) to update the course file.

-About course subject, a matched was carried out between UCI course subjects and ACM Computing Classification System (https://cran.r-project.org/web/classifications/ACM.html) and Computer Science Ontology (https://cso.kmi.open.ac.uk/downloads) from Open University of UK.

-About academic terms, a matched was carried out between UCI course academic terms and Open University of UK academic terms.
#### Instalation steps
		1-Create universitydb database
		2-Run database backup (sql/backup.sql). We can also take data from  sql/db.sql file
		3-Install technologies
				-npm install @babel/polyfill 
				-npm install express
				-npm install pg pg-hstore sequelize morgan 
				-npm install --save-dev @babel/core @babel/cli @babel/preset-env
				-npm install nodemon -D 
				-npm install @babel/node -D
		4-Create .babelrc file to specify Babel to work with novel javascript code
		{
		    "presets": [
  		      "@babel/preset-env"
  		  ]
		} 
		5.Create the folder src and the file src/index.js
		6.Replace the following in the package.json file:
		  	  "test": "echo \"Error: no test specified\" && exit 1" 
    		    	=>	
          		  "dev":"nodemon src/index.js --exec babel-node",  
			  "build": "babel src --out-dir dist",  
			  "start":"node dist/index.js"	
		7.To test the app:
			npm run dev
		8.To put into production
			npm run build 
			npm start 
*It will be running free on http://www.linkeduniversity.org soon*
