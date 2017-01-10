package id.artivisi.training.angular2.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import org.hibernate.validator.constraints.NotEmpty;

@Entity
@Table(name = "rekening")
public class Rekening {
    
    @Id
    private String id;
    
    @NotNull @NotEmpty @Size(min = 10, max = 100)
    @Column(unique = true)
    private String nomor;
    
    @NotNull @NotEmpty
    @Size(min = 3, max = 255)
    private String nama;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getNomor() {
        return nomor;
    }

    public void setNomor(String nomor) {
        this.nomor = nomor;
    }

    public String getNama() {
        return nama;
    }

    public void setNama(String nama) {
        this.nama = nama;
    }
    
    
}
