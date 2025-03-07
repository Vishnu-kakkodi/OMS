
import { ISellerDocument } from "../type/seller";
import { ISellerRepository } from "../interfaces/RepositoryInterface/ISellerRepository";
import { ISellerService } from "../interfaces/ServiceInterface/ISellerService";



class SellerService implements ISellerService {
    private readonly sellerRepository: ISellerRepository;

    constructor(sellerRepository: ISellerRepository) {
        this.sellerRepository = sellerRepository;
    }

    async createSeller(sellername: string): Promise<ISellerDocument> {
        try {
            const seller = await this.sellerRepository.create({ sellername });
            return seller
        } catch (error) {
            throw error
        }
    }

}

export default SellerService;