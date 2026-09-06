package pe.edu.vallegrande.app.service;

import pe.edu.vallegrande.app.model.Customer;

import java.util.List;
import java.util.Optional;

public interface CustomerService {
    List<Customer> findAll();
    Optional<Customer> findById(Long id);
    List<Customer> findByState(String state);
    Customer save(Customer customer);
    Optional<Customer> update(Long id, Customer customer);
    boolean delete(Long id);
    boolean restore(Long id);
}
