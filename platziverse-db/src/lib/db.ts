import { Sequelize }  from 'sequelize';

let sequelize:any = null

export const setUpDatabase = (config: object) => {
    if(!sequelize) {
        sequelize = new Sequelize(config)
    }
    return sequelize
}
