// import * as React from 'react';

interface User {
    _id: string;
    fio: string;
    mainPhone: string;
    workPhone: string;
    email: string;
    dateOfBirth: string;
    address: string;
    vk: string;
    comments: string;
};

interface FieldErrors {
    [index: string]: boolean;
    fio: boolean;
    mainPhone: boolean;
    workPhone: boolean;
    email: boolean;
    dateOfBirth: boolean;
    address: boolean;
    vk: boolean;
    comments: boolean;
};

interface AppState {
    users: Array<User>;
    user: User;
    loading: boolean;
    errors: boolean;
    fieldErrors: FieldErrors;
};

interface Action {
    type: string;
    payload: any;
};

interface UserErrorValidators {
    fio(value: string): boolean;
    mainPhone(value: string): boolean;
    workPhone(value: string): boolean;
    dateOfBirth(value: string): boolean;
};

interface IsErrorData {
    key: string;
    value: string;
};

interface IsErrorReturn {
    key: string;
    error: boolean;
};

interface InfoFieldProps {
    children?: JSX.Element;
    value?: string;
    label: string;
    hideWrapper?: boolean;
};

interface TextInputProps {
    // label: string;
    value: string;
    placeholder: string;
    hasError: boolean;
    onChange(value: string): void;
};

interface ButtonProps {
    icon?: string;
    fontIcon?: string;
    title: string;
    classNames: string;
    disabled?: boolean;
    onClick: () => void;
};

interface FormProps {
    children?: JSX.Element;
    onClose?: () => void;
    onSave?: () => void;
    isEditable?: boolean;
    title?: string;
    disabled?: boolean;
};

interface UserListItemProps {
    user: User;
    deleteUser(value: string): void;
    history: any;
};

interface ContactsProps {
    store: AppState;
    actions: any;
    history: any;
};

interface UserForm {
    store: AppState;
    actions: any;
    history: any;
    match: any;
};

interface UserFormContent {
    store: AppState;
    actions: any;
    history: any;
    match: any;
    saveUserToStore: () => void;
    isEditable: boolean;
    isNew: boolean;
};

type HasOnlyDigits = (value: string) => boolean;
type YearIsLessThanCurrent = (value: string) => boolean;
type IsEmpty = (value: string) => boolean;

interface contentPropsFields {
    [index: string]: string;
    label: string;
    placeholder: string;
};

interface contentProps {
    [index: string]: contentPropsFields;
    //
    // [propName: string]:
    // [propName: string]: {
    //     label: string;
    //     placeholder?: string;
    // };
};

interface EditUserActionData {
    key: string;
    value: string;
};

export {
    User,
    FieldErrors,
    Action,
    AppState,
    UserErrorValidators,
    IsErrorData,
    IsErrorReturn,
    HasOnlyDigits,
    YearIsLessThanCurrent,
    IsEmpty,
    InfoFieldProps,
    TextInputProps,
    ButtonProps,
    FormProps,
    ContactsProps,
    UserListItemProps,
    UserForm,
    UserFormContent,
    contentProps,
    EditUserActionData
}
