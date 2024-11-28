const locators = {
    LOGIN: {
        WORKSPACE: '#workspace',
        USERNAME: '#username',
        PASSOWRD: '#password',
        BTN_LOGIN: '#submit_button'
    },
    MENU: {
        LOCALS: '[href="/CenterWeb/serviceLocal"] > span'
    },
    LISTLOCAL: {
        BTN_INSERT: '#addServiceLocal',
        TF_SEARCH: '#genericFilter',
        BTN_SEARCH: '#serviceLocalList_doSearch',
        TD_FIRSTLINE_DESCRIPTION: '.odd > :nth-child(2)',
        TD_FIRSTLINE_BTN_EDIT: '.edit-record-serviceLocal',
        BODY_SECTION: '.page-content'
    },
    ADDLOCAL: {
        TF_DESCRIPTION: '#serviceLocal_description',
        TF_CORPORTE_NAME: '#serviceLocal_corporateName',
        BTN_SAVE: '#formServiceLocal_doSave',
        CHK_ACTIVE: '#serviceLocal_active'            
    }  
}

export default locators