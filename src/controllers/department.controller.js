import Department from '../models/Department';
const util = require('util');
const fs = require("fs");
const writeFile = util.promisify(fs.writeFile);

export async function getDepartments(req, res) {
    try {
        let result = {};
        result['Departments'] = await Department.findAll({});
        res.status(200).json(result);
    }
    catch (e) {
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        })
    }


}
export async function createDepartment(req, res) {
    const { denomination, description, uri } = req.body;
    try {
        let newDepartment = await Department.create({
            denomination,
            description,
            uri
        },
            {
                fields: ['denomination', 'description', 'uri']
            });
        if (newDepartment) {
            saveDepartmentsRawData();
            return res.json({
                message: 'Department created successfully',
                data: newDepartment
            });

        }

    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}
export async function getOneDepartment(req, res) {
    try {
        const { id } = req.params;
        const department = await Department.findOne({
            where: {
                id
            }
        });
        res.json(department);
    } catch (e) {
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        })
    }
}
export async function deleteDepartment(req, res) {
    const { id } = req.params;
    try {
        const deleteRowCount = await Department.destroy({
            where: {
                id
            }
        });
        if (deleteRowCount > 0) {
            saveDepartmentsRawData();
            res.json({
                message: 'Department deleted successfully',
                count: 'deleteRowCount'
            })

        }
    } catch (e) {
        res.json({
            message: 'Something goes wrong',
            data: {}
        })
    }
}
export async function updateDepartment(req, res) {
    const { id } = req.params;
    const { denomination, description, uri } = req.body;
    try {
        const departments = await Department.findAll({
            attibutes: ['id', 'denomination', 'description', 'uri'],
            where: { id }
        });
        if (departments.length > 0) {
            departments.forEach(async department => {
                await department.update({
                    denomination, description, uri
                })
                saveDepartmentsRawData();
            });
        }
        return res.json({
            message: 'Department updated successfully',
            data: departments

        });
    } catch (e) {
        return res.json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}
async function saveDepartmentsRawData() {
    try {
        const departments = await Department.findAll({
            attibutes: ['id', 'denomination', 'description', 'uri']
        });
        await writeFile("./files/raw_data/departments.json", JSON.stringify(departments));

    } catch (e) {
        console.log(e);
    }
}