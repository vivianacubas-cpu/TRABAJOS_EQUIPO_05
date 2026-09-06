package pe.edu.vallegrande.app.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import pe.edu.vallegrande.app.model.Customer;
import pe.edu.vallegrande.app.repository.CustomerRepository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
public class CustomerServiceImpl implements CustomerService {

    private final CustomerRepository repository;

    @Override
    @Transactional(readOnly = true)
    public List<Customer> findAll() {
        return repository.findAll();
    }

    @Override
    @Transactional(readOnly = true)
    public Optional<Customer> findById(Long id) {
        return repository.findById(id);
    }

    @Override
    @Transactional(readOnly = true)
    public List<Customer> findByState(String state) {
        return repository.findByState(state);
    }

    @Override
    public Customer save(Customer customer) {
        customer.setId(null);
        customer.setState("A");
        customer.setCreatedAt(LocalDateTime.now());
        customer.setUpdatedAt(null);
        customer.setDeletedAt(null);
        customer.setRestoredAt(null);
        return repository.save(customer);
    }

    @Override
    public Optional<Customer> update(Long id, Customer data) {
        return repository.findById(id).map(customer -> {
            customer.setDni(data.getDni());
            customer.setCellPhone(data.getCellPhone());
            customer.setFirstName(data.getFirstName());
            customer.setLastName(data.getLastName());
            customer.setEmail(data.getEmail());
            customer.setAge(data.getAge());
            customer.setUpdatedAt(LocalDateTime.now());
            return repository.save(customer);
        });
    }

    @Override
    public boolean delete(Long id) {
        return repository.findById(id).map(customer -> {
            customer.setState("I");
            customer.setDeletedAt(LocalDateTime.now());
            return true;
        }).orElse(false);
    }

    @Override
    public boolean restore(Long id) {
        return repository.findById(id).map(customer -> {
            customer.setState("A");
            customer.setDeletedAt(null);
            customer.setRestoredAt(LocalDateTime.now());
            return true;
        }).orElse(false);
    }
}
