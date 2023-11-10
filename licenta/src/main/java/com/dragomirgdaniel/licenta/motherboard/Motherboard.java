package com.dragomirgdaniel.licenta.motherboard;

import com.dragomirgdaniel.licenta.product.Product;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.SuperBuilder;

@Entity
@Table(name = "motherboard", catalog = "store_db")
@Data
@NoArgsConstructor
@AllArgsConstructor
@SuperBuilder
@EqualsAndHashCode(callSuper=false)
@PrimaryKeyJoinColumn(name = "product_idp")
public class Motherboard extends Product {

    @Column(name = "format", nullable = false)
    private String format;

    @Column(name = "processor_socket", nullable = false)
    private String processorSocket;

    @Column(name = "memory_type", nullable = false)
    private String memoryType;

    @Column(name = "number_of_slots", nullable = false)
    private Integer numberOfSlots;

    @Column(name = "audio_chipset", nullable = false)
    private String audioChipset;

    @Column(name = "integrated_networkcard", nullable = false)
    private String integratedNetworkcard;

    @Column(name = "integrated_videocard", nullable = false)
    private String integratedVideocard;

    @Column(name = "sata_number", nullable = false)
    private Integer sataNumber;

    @Column(name = "ssd_number", nullable = false)
    private Integer ssdNumber;

    @Column(name = "other")
    private String other;

    @Override
    public String toString() {
        return "Motherboard{" + super.toString()+
                ", format='" + format + '\'' +
                ", processorSocket='" + processorSocket + '\'' +
                ", memoryType='" + memoryType + '\'' +
                ", numberOfSlots=" + numberOfSlots +
                ", audioChipset='" + audioChipset + '\'' +
                ", integratedNetworkcard='" + integratedNetworkcard + '\'' +
                ", integratedVideocard='" + integratedVideocard + '\'' +
                ", sataNumber=" + sataNumber +
                ", ssdNumber=" + ssdNumber +
                ", other='" + other + '\'' +
                '}';
    }
}
