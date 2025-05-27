import { Injectable } from "@nestjs/common";
import { HttpService } from "@nestjs/axios";
import { firstValueFrom } from "rxjs";
import { TQueryParams, TRandomUser, TRestructuredUser } from "./dto/random-user.dto";

@Injectable()
export class RandomUserService {
    constructor(private httpsService: HttpService) {}

    async getRestructuredUsers(query: TQueryParams){
        const data = await this.getRandomUser(query)
        const restructuredUser = await this.restructuredUser(data)
        if(!query.search){
            return restructuredUser
        }

        return this.searchData(restructuredUser, query.search);

    }

    async searchData(data: TRestructuredUser, query: string){
        const safeQuery = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        const regex = new RegExp(safeQuery, "i");
        
        return  {
            ...data,
            data: data.data.filter(user => regex.test(user.name) || regex.test(user.email))
        } 
    }

    async getRandomUser(query: TQueryParams){
        const response$ = this.httpsService.get('https://randomuser.me/api', {
            params: query
        })

        const response = await firstValueFrom(response$);

        return response.data;
    }

    async restructuredUser(data: TRandomUser) {
        return {
            data: data.results.map((user) => ({
                name: `${user.name.title} ${user.name.first} ${user.name.last}`,
                location: `${user.location.street.number},${user.location.street.name}, ${user.location.city},${user.location.country} , ${user.location.country} `,
                email: user.email,
                age: user.registered.age,
                phone: user.phone,
                cell: user.cell,
                picture: Object.values(user.picture)
            })),
            meta: {
                results: data.info.results,
                page: data.info.page,
            }
        }
    }
}