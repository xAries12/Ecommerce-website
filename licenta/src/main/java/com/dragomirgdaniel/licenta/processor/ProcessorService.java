package com.dragomirgdaniel.licenta.processor;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProcessorService {
    private final ProcessorRepository processorRepository;

    public ProcessorService(ProcessorRepository processorRepository) {
        this.processorRepository = processorRepository;
    }

    public List<Processor> findAll() {
        return processorRepository.findAll();
    }

    public <S extends Processor> S save(S entity) {
        return processorRepository.save(entity);
    }
    public void update(Processor entity,Integer idProcessor) {
        Optional<Processor> processor = processorRepository.findById(idProcessor);
        Optional<Processor> processor1 = processor.map(processor2 -> {
            processor2.setImage(entity.getImage());
            processor2.setName(""+entity.getProducer()+entity.getModel());
            processor2.setStock(entity.getStock());
            processor2.setCategory(entity.getCategory());
            processor2.setPrice(entity.getPrice());
            processor2.setWarranty(entity.getWarranty());
            processor2.setProducer(entity.getProducer());
            processor2.setModel(entity.getModel());
            processor2.setStock(entity.getStock());
            processor2.setCore(entity.getCore());
            processor2.setSeries(entity.getSeries());
            processor2.setNumberOfCores(entity.getNumberOfCores());
            processor2.setNumberOfThreads(entity.getNumberOfThreads());
            processor2.setFrequency(entity.getFrequency());
            processor2.setFrequencyMax(entity.getFrequencyMax());
            processor2.setCache(entity.getCache());
            processor2.setTdpMax(entity.getTdpMax());
            processor2.setOther(entity.getOther());
            return processor2;
        });
        processorRepository.save(processor1.get());
    }

    public Optional<Processor> findById(Integer idProcessor) {
        return processorRepository.findById(idProcessor);
    }

    public void deleteById(Integer idProcessor) {
        processorRepository.deleteById(idProcessor);
    }
}
