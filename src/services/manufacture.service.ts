
import { IManufactureDocument } from "../type/manufacture";
import { IManufactureService } from "../interfaces/ServiceInterface/IManufactureService";
import { IManufactureRepository } from "../interfaces/RepositoryInterface/IManufactureRepository";



class ManufactureService implements IManufactureService {
    private readonly manufactureRepository: IManufactureRepository;

    constructor(manufactureRepository: IManufactureRepository) {
        this.manufactureRepository = manufactureRepository;
    }

    async createManufacture(manufacturename: string): Promise<IManufactureDocument> {
        try {
            const manufacture = await this.manufactureRepository.create({ manufacturename });
            return manufacture
        } catch (error) {
            throw error
        }
    }

}

export default ManufactureService;