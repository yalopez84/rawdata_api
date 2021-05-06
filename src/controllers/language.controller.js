import Language from '../models/Language';
const util = require('util');
const fs = require("fs");
const writeFile = util.promisify(fs.writeFile);

export async function getLanguages(req, res) {
    try {
        let result = {};
        result['Languages'] = await Language.findAll({});
        res.status(200).json(result);
    }
    catch (e) {
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        })
    }
}
export async function createLanguage(req, res) {
    const { denomination, description, uri } = req.body;
    try {
        let language = await Language.create({
            denomination,
            description,
            uri
        },
            {
                fields: ['denomination', 'description', 'uri']
            });
        if (language) {
            saveLanguagesRawData();
            return res.json({
                message: 'Language created successfully',
                data: language
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
export async function getOneLanguage(req, res) {
    try {
        const { id } = req.params;
        const language = await Language.findOne({
            where: {
                id
            }
        });
        res.json(language);
    } catch (e) {
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        })
    }
}
export async function deleteLanguage(req, res) {
    const { id } = req.params;
    try {
        const deleteRowCount = await Language.destroy({
            where: {
                id
            }
        });
        if (deleteRowCount > 0) {
            saveLanguagesRawData();
            res.json({
                message: 'Language deleted successfully',
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
export async function updateLanguage(req, res) {
    const { id } = req.params;
    const { denomination, description, uri } = req.body;
    try {
        const languages = await Language.findAll({
            attibutes: ['id', 'denomination', 'description', 'uri'],
            where: { id }
        });
        if (languages.length > 0) {
            languages.forEach(async language => {
                await language.update({
                    denomination, description, uri
                })
                saveLanguagesRawData();
            });
        }

        return res.json({
            message: 'Language updated successfully',
            data: languages

        });
    } catch (e) {
        return res.json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}
async function saveLanguagesRawData() {
    try {
        let languages = await Language.findAll({});

        await writeFile("./files/raw_data/languages.json", JSON.stringify(languages));

    } catch (e) {
        console.log(e);
    }
}