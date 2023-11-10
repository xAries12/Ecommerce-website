package com.dragomirgdaniel.licenta.hard_disk;

import com.dragomirgdaniel.licenta.product.Product;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.SuperBuilder;

@Entity
@Table(name = "hard_disk", catalog = "store_db")
@Data
@NoArgsConstructor
@AllArgsConstructor
@SuperBuilder
@EqualsAndHashCode(callSuper=false)
@PrimaryKeyJoinColumn(name = "product_idp")
public class HardDisk extends Product {


    @Column(name = "series", nullable = false)
    private String series;

    @Column(name = "interface", nullable = false)
    private String interfaceType;

    @Enumerated(EnumType.STRING)
    @Column(name = "type_hdd", nullable = false)
    private TypeHdd typeHdd;

    @Column(name = "capacity", nullable = false)
    private Integer capacity;

    @Column(name = "buffer", nullable = false)
    private Integer buffer;

    @Column(name = "speed", nullable = false)
    private Integer speed;

    @Column(name = "other")
    private String other;

    public enum TypeHdd{
        Intern, Extern
    }
    @Override
    public String toString() {
        return "HardDisk{" + super.toString()+
                ", series='" + series + '\'' +
                ", interfaceType='" + interfaceType + '\'' +
                ", typeHdd='" + typeHdd + '\'' +
                ", capacity=" + capacity +
                ", buffer=" + buffer +
                ", speed=" + speed +
                ", other='" + other + '\'' +
                '}';
    }
}
