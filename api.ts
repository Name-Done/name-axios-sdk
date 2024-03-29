/* tslint:disable */
/* eslint-disable */
/**
 * Name Done - Name Service
 * A name service API for Name Done
 *
 * The version of the OpenAPI document: 0.0.7
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from './configuration';
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
import type { RequestArgs } from './base';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface BadRequestResponseDto
 */
export interface BadRequestResponseDto {
    /**
     * HTTP status code of the error
     * @type {number}
     * @memberof BadRequestResponseDto
     */
    'statusCode': number;
    /**
     * Short descriptions of the errors
     * @type {Array<string>}
     * @memberof BadRequestResponseDto
     */
    'message': Array<string>;
    /**
     * Error type
     * @type {string}
     * @memberof BadRequestResponseDto
     */
    'error': string;
}
/**
 * 
 * @export
 * @interface NameResponseDto
 */
export interface NameResponseDto {
    /**
     * An array of possible first names
     * @type {Array<string>}
     * @memberof NameResponseDto
     */
    'names': Array<string>;
}

/**
 * DomainNameApi - axios parameter creator
 * @export
 */
export const DomainNameApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get a list of domain names
         * @param {string} [name] Domain name query parameter
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDomainNames: async (name?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/name/domain`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (name !== undefined) {
                localVarQueryParameter['name'] = name;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DomainNameApi - functional programming interface
 * @export
 */
export const DomainNameApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = DomainNameApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Get a list of domain names
         * @param {string} [name] Domain name query parameter
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getDomainNames(name?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NameResponseDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getDomainNames(name, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * DomainNameApi - factory interface
 * @export
 */
export const DomainNameApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = DomainNameApiFp(configuration)
    return {
        /**
         * 
         * @summary Get a list of domain names
         * @param {string} [name] Domain name query parameter
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDomainNames(name?: string, options?: any): AxiosPromise<NameResponseDto> {
            return localVarFp.getDomainNames(name, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DomainNameApi - object-oriented interface
 * @export
 * @class DomainNameApi
 * @extends {BaseAPI}
 */
export class DomainNameApi extends BaseAPI {
    /**
     * 
     * @summary Get a list of domain names
     * @param {string} [name] Domain name query parameter
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DomainNameApi
     */
    public getDomainNames(name?: string, options?: AxiosRequestConfig) {
        return DomainNameApiFp(this.configuration).getDomainNames(name, options).then((request) => request(this.axios, this.basePath));
    }
}



/**
 * EmailDomainNameApi - axios parameter creator
 * @export
 */
export const EmailDomainNameApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get a list of email domain names
         * @param {string} name Email domain name query parameter
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getEmailDomainNames: async (name: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('getEmailDomainNames', 'name', name)
            const localVarPath = `/name/email-domain`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (name !== undefined) {
                localVarQueryParameter['name'] = name;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * EmailDomainNameApi - functional programming interface
 * @export
 */
export const EmailDomainNameApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = EmailDomainNameApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Get a list of email domain names
         * @param {string} name Email domain name query parameter
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getEmailDomainNames(name: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NameResponseDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getEmailDomainNames(name, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * EmailDomainNameApi - factory interface
 * @export
 */
export const EmailDomainNameApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = EmailDomainNameApiFp(configuration)
    return {
        /**
         * 
         * @summary Get a list of email domain names
         * @param {string} name Email domain name query parameter
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getEmailDomainNames(name: string, options?: any): AxiosPromise<NameResponseDto> {
            return localVarFp.getEmailDomainNames(name, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * EmailDomainNameApi - object-oriented interface
 * @export
 * @class EmailDomainNameApi
 * @extends {BaseAPI}
 */
export class EmailDomainNameApi extends BaseAPI {
    /**
     * 
     * @summary Get a list of email domain names
     * @param {string} name Email domain name query parameter
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmailDomainNameApi
     */
    public getEmailDomainNames(name: string, options?: AxiosRequestConfig) {
        return EmailDomainNameApiFp(this.configuration).getEmailDomainNames(name, options).then((request) => request(this.axios, this.basePath));
    }
}



/**
 * FamilyNameApi - axios parameter creator
 * @export
 */
export const FamilyNameApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get a list of family names
         * @param {string} [name] Name query parameter
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFamilyNames: async (name?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/name/family`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (name !== undefined) {
                localVarQueryParameter['name'] = name;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * FamilyNameApi - functional programming interface
 * @export
 */
export const FamilyNameApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = FamilyNameApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Get a list of family names
         * @param {string} [name] Name query parameter
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getFamilyNames(name?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NameResponseDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFamilyNames(name, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * FamilyNameApi - factory interface
 * @export
 */
export const FamilyNameApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = FamilyNameApiFp(configuration)
    return {
        /**
         * 
         * @summary Get a list of family names
         * @param {string} [name] Name query parameter
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFamilyNames(name?: string, options?: any): AxiosPromise<NameResponseDto> {
            return localVarFp.getFamilyNames(name, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * FamilyNameApi - object-oriented interface
 * @export
 * @class FamilyNameApi
 * @extends {BaseAPI}
 */
export class FamilyNameApi extends BaseAPI {
    /**
     * 
     * @summary Get a list of family names
     * @param {string} [name] Name query parameter
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FamilyNameApi
     */
    public getFamilyNames(name?: string, options?: AxiosRequestConfig) {
        return FamilyNameApiFp(this.configuration).getFamilyNames(name, options).then((request) => request(this.axios, this.basePath));
    }
}



/**
 * GenderApi - axios parameter creator
 * @export
 */
export const GenderApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get a list of genders
         * @param {string} [name] Name query parameter
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getGenders: async (name?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/name/gender`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (name !== undefined) {
                localVarQueryParameter['name'] = name;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * GenderApi - functional programming interface
 * @export
 */
export const GenderApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = GenderApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Get a list of genders
         * @param {string} [name] Name query parameter
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getGenders(name?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NameResponseDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getGenders(name, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * GenderApi - factory interface
 * @export
 */
export const GenderApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = GenderApiFp(configuration)
    return {
        /**
         * 
         * @summary Get a list of genders
         * @param {string} [name] Name query parameter
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getGenders(name?: string, options?: any): AxiosPromise<NameResponseDto> {
            return localVarFp.getGenders(name, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * GenderApi - object-oriented interface
 * @export
 * @class GenderApi
 * @extends {BaseAPI}
 */
export class GenderApi extends BaseAPI {
    /**
     * 
     * @summary Get a list of genders
     * @param {string} [name] Name query parameter
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GenderApi
     */
    public getGenders(name?: string, options?: AxiosRequestConfig) {
        return GenderApiFp(this.configuration).getGenders(name, options).then((request) => request(this.axios, this.basePath));
    }
}



/**
 * GivenNameApi - axios parameter creator
 * @export
 */
export const GivenNameApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get a list of given names
         * @param {string} [name] Name query parameter
         * @param {string} [gender] Gender query parameter
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getGivenNames: async (name?: string, gender?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/name/given`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (name !== undefined) {
                localVarQueryParameter['name'] = name;
            }

            if (gender !== undefined) {
                localVarQueryParameter['gender'] = gender;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * GivenNameApi - functional programming interface
 * @export
 */
export const GivenNameApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = GivenNameApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Get a list of given names
         * @param {string} [name] Name query parameter
         * @param {string} [gender] Gender query parameter
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getGivenNames(name?: string, gender?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NameResponseDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getGivenNames(name, gender, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * GivenNameApi - factory interface
 * @export
 */
export const GivenNameApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = GivenNameApiFp(configuration)
    return {
        /**
         * 
         * @summary Get a list of given names
         * @param {string} [name] Name query parameter
         * @param {string} [gender] Gender query parameter
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getGivenNames(name?: string, gender?: string, options?: any): AxiosPromise<NameResponseDto> {
            return localVarFp.getGivenNames(name, gender, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * GivenNameApi - object-oriented interface
 * @export
 * @class GivenNameApi
 * @extends {BaseAPI}
 */
export class GivenNameApi extends BaseAPI {
    /**
     * 
     * @summary Get a list of given names
     * @param {string} [name] Name query parameter
     * @param {string} [gender] Gender query parameter
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GivenNameApi
     */
    public getGivenNames(name?: string, gender?: string, options?: AxiosRequestConfig) {
        return GivenNameApiFp(this.configuration).getGivenNames(name, gender, options).then((request) => request(this.axios, this.basePath));
    }
}



/**
 * LanguageNameApi - axios parameter creator
 * @export
 */
export const LanguageNameApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get a list of language names
         * @param {string} [name] Name query parameter
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLanguageNames: async (name?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/name/language`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (name !== undefined) {
                localVarQueryParameter['name'] = name;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * LanguageNameApi - functional programming interface
 * @export
 */
export const LanguageNameApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = LanguageNameApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Get a list of language names
         * @param {string} [name] Name query parameter
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getLanguageNames(name?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NameResponseDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getLanguageNames(name, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * LanguageNameApi - factory interface
 * @export
 */
export const LanguageNameApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = LanguageNameApiFp(configuration)
    return {
        /**
         * 
         * @summary Get a list of language names
         * @param {string} [name] Name query parameter
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLanguageNames(name?: string, options?: any): AxiosPromise<NameResponseDto> {
            return localVarFp.getLanguageNames(name, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * LanguageNameApi - object-oriented interface
 * @export
 * @class LanguageNameApi
 * @extends {BaseAPI}
 */
export class LanguageNameApi extends BaseAPI {
    /**
     * 
     * @summary Get a list of language names
     * @param {string} [name] Name query parameter
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LanguageNameApi
     */
    public getLanguageNames(name?: string, options?: AxiosRequestConfig) {
        return LanguageNameApiFp(this.configuration).getLanguageNames(name, options).then((request) => request(this.axios, this.basePath));
    }
}



/**
 * TopLevelDomainNameApi - axios parameter creator
 * @export
 */
export const TopLevelDomainNameApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get a list of top level domain names
         * @param {string} name Top level domain name query parameter
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTopLevelDomainNames: async (name: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('getTopLevelDomainNames', 'name', name)
            const localVarPath = `/name/top-level-domain`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (name !== undefined) {
                localVarQueryParameter['name'] = name;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * TopLevelDomainNameApi - functional programming interface
 * @export
 */
export const TopLevelDomainNameApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TopLevelDomainNameApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Get a list of top level domain names
         * @param {string} name Top level domain name query parameter
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getTopLevelDomainNames(name: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NameResponseDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getTopLevelDomainNames(name, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TopLevelDomainNameApi - factory interface
 * @export
 */
export const TopLevelDomainNameApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TopLevelDomainNameApiFp(configuration)
    return {
        /**
         * 
         * @summary Get a list of top level domain names
         * @param {string} name Top level domain name query parameter
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTopLevelDomainNames(name: string, options?: any): AxiosPromise<NameResponseDto> {
            return localVarFp.getTopLevelDomainNames(name, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TopLevelDomainNameApi - object-oriented interface
 * @export
 * @class TopLevelDomainNameApi
 * @extends {BaseAPI}
 */
export class TopLevelDomainNameApi extends BaseAPI {
    /**
     * 
     * @summary Get a list of top level domain names
     * @param {string} name Top level domain name query parameter
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TopLevelDomainNameApi
     */
    public getTopLevelDomainNames(name: string, options?: AxiosRequestConfig) {
        return TopLevelDomainNameApiFp(this.configuration).getTopLevelDomainNames(name, options).then((request) => request(this.axios, this.basePath));
    }
}



