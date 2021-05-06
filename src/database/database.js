import Sequelize from 'sequelize';
import serverConfig from '../../config_files/server_config';
const host=serverConfig.host;
const bd_name=serverConfig.bd_name;
const bd_user=serverConfig.bd_user;
const bd_user_pas=serverConfig.bd_user_pass;

export const sequelize=new Sequelize(
    bd_name, 
    bd_user, 
    bd_user_pas,     
    {
        host: host,
        dialect: 'postgres',
        pool: { 
            max: 5,
            min: 0,
            require: 30000,
            idle: 10000
        },
        logging: false, 
    }
);
