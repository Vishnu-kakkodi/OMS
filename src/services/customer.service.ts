
import { ICustomerService } from "../interfaces/ServiceInterface/ICustomerService";
import { ICustometrRepository } from "../interfaces/RepositoryInterface/ICustomerRepository";
import { ICustomerDocument } from "../type/customer";



class CustomerService implements ICustomerService {
    private readonly customerRepository: ICustometrRepository;

    constructor(customerRepository: ICustometrRepository) {
        this.customerRepository = customerRepository;
    }

    async createCustomer(customername: string): Promise<ICustomerDocument> {
        try {
            const customer = await this.customerRepository.create({ customername });
            return customer
        } catch (error) {
            throw error
        }
    }

}

export default CustomerService;