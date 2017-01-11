package id.artivisi.training.angular2.controller;

import id.artivisi.training.angular2.dao.TransferDao;
import id.artivisi.training.angular2.entity.Transfer;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TransferController {
    
    @Autowired private TransferDao transferDao;
    
    @RequestMapping(value = "/transfer/", method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.CREATED)
    public void simpanTransfer(@RequestBody @Valid Transfer t){
        transferDao.save(t);
    }
    
    @RequestMapping(value = "/transfer/", method = RequestMethod.GET)
    public Iterable<Transfer> semuaTransfer(){
        return transferDao.findAll();
    }
}
