package id.artivisi.training.angular2.entity;

import java.math.BigDecimal;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import org.hibernate.annotations.GenericGenerator;

@Entity @Table(name = "transfer")
public class Transfer {
    
    @Id @GeneratedValue(generator = "uuid")
    @GenericGenerator(name = "uuid", strategy = "uuid2")
    private String id;
    
    @NotNull
    @ManyToOne @JoinColumn(name = "id_rekening_sumber", nullable = false)
    private Rekening rekeningSumber;
    
    @NotNull
    @ManyToOne @JoinColumn(name = "id_rekening_tujuan", nullable = false)
    private Rekening rekeningTujuan;
    
    @NotNull @Min(1)
    private BigDecimal nilai;
    private String berita;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Rekening getRekeningSumber() {
        return rekeningSumber;
    }

    public void setRekeningSumber(Rekening rekeningSumber) {
        this.rekeningSumber = rekeningSumber;
    }

    public Rekening getRekeningTujuan() {
        return rekeningTujuan;
    }

    public void setRekeningTujuan(Rekening rekeningTujuan) {
        this.rekeningTujuan = rekeningTujuan;
    }

    public BigDecimal getNilai() {
        return nilai;
    }

    public void setNilai(BigDecimal nilai) {
        this.nilai = nilai;
    }

    public String getBerita() {
        return berita;
    }

    public void setBerita(String berita) {
        this.berita = berita;
    }
    
    
}
