export type TQueryParams = {
  results: number;
  page: number;
  search?: string;
}

export type TRestructuredUser = {
    data: {
        name: string,
        location: string,
        email: string,
        age: number,
        phone: string,
        cell: string,
        picture: string[]
                
    }[],
    meta: {
        results: number,
        page: number
    }
}

export type TRandomUser = {
    results: {
                gender: string;
                name: {
                    title: string;
                    first: string;
                    last: string;
                };
                location: {
                    street: {
                    number: number;
                    name: string;
                    };
                    city: string;
                    state: string;
                    country: string;
                    postcode: number | string;
                    coordinates: {
                    latitude: string;
                    longitude: string;
                    };
                    timezone: {
                    offset: string;
                    description: string;
                    };
                };
                email: string;
                login: {
                    uuid: string;
                    username: string;
                    password: string;
                    salt: string;
                    md5: string;
                    sha1: string;
                    sha256: string;
                };
                dob: {
                    date: string;
                    age: number;
                };
                registered: {
                    date: string;
                    age: number;
                };
                phone: string;
                cell: string;
                id: {
                    name: string;
                    value: string | null;
                };
                picture: {
                    large: string;
                    medium: string;
                    thumbnail: string;
                };
                nat: string;
        }[],
        info: {
            results: number,
            page: number
        }
}