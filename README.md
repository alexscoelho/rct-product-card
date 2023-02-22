# Rct-product-card

Testing package deployment to Npm

## Alexson Coelho

## Example

```
<ProductCard
  product={product}
  initialValues={{
    count: 6,
    maxCount: 10,
  }}
>
  {({ reset, count, isMaxCountReached, maxCount, increaseBy }) => (
    <>
      <ProductImage />
      <ProductTitle />
      <ProductButtons />
    </>
  )}
</ProductCard>
```
