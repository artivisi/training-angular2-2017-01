package id.artivisi.training.angular2.dao;

import id.artivisi.training.angular2.entity.Transfer;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface TransferDao extends PagingAndSortingRepository<Transfer, String>{
    
}
