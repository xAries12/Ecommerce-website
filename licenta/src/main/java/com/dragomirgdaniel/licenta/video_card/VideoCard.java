package com.dragomirgdaniel.licenta.video_card;

import com.dragomirgdaniel.licenta.product.Product;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.SuperBuilder;

@Entity
@Table(name = "video_card", catalog = "store_db")
@Data
@NoArgsConstructor
@AllArgsConstructor
@SuperBuilder
@EqualsAndHashCode(callSuper=false)
@PrimaryKeyJoinColumn(name = "product_idp")
public class VideoCard extends Product {

    @Enumerated(EnumType.STRING)
    @Column(name = "type", nullable = false)
    private Type type;

    @Column(name = "producer", nullable = false)
    private String producer;

    @Column(name = "family", nullable = false)
    private String family;

    @Column(name = "model", nullable = false)
    private String model;

    @Column(name = "series", nullable = false)
    private String series;

    @Column(name = "memory_type", nullable = false)
    private String memoryType;

    @Column(name = "memory_size", nullable = false)
    private Integer memorySize;

    @Column(name = "bus_memory", nullable = false)
    private Integer busMemory;

    @Column(name = "other")
    private String other;
    public enum Type {
        Integrated, Dedicated
    }

    @Override
    public String toString() {
        return "VideoCard{" + super.toString()+
                "type=" + type +
                ", producer='" + producer + '\'' +
                ", family='" + family + '\'' +
                ", model='" + model + '\'' +
                ", series='" + series + '\'' +
                ", memoryType='" + memoryType + '\'' +
                ", memorySize=" + memorySize +
                ", busMemory=" + busMemory +
                ", other='" + other + '\'' +
                '}';
    }
}
