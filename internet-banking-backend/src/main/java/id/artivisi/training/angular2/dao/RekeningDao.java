package id.artivisi.training.angular2.dao;

import id.artivisi.training.angular2.entity.Rekening;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface RekeningDao extends PagingAndSortingRepository<Rekening, String>{
    
}
