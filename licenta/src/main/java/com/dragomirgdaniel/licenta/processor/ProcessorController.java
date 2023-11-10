package com.dragomirgdaniel.licenta.processor;

import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/products/processors")
public class ProcessorController {
    private final ProcessorService processorService;

    public ProcessorController(ProcessorService processorService) {
        this.processorService = processorService;
    }
    @GetMapping
    public List<Processor> findAll() {
        return processorService.findAll();
    }
    @PostMapping
    public <S extends Processor> S save(@RequestBody S entity) {
        return processorService.save(entity);
    }
    @PutMapping("/{idProcessor}")
    public void update(@RequestBody Processor entity,@PathVariable Integer idProcessor) {
        processorService.update(entity, idProcessor);
    }
    @GetMapping(("/{idProcessor}"))
    public Optional<Processor> findById(@PathVariable Integer idProcessor) {
        return processorService.findById(idProcessor);
    }
    @DeleteMapping(("/{idProcessor}"))
    public void deleteById(@PathVariable Integer idProcessor) {
        processorService.deleteById(idProcessor);
    }
}
