import React, { ChangeEvent, FormEvent, useState } from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom'
import Dropzone from '../../components/Dropzone'
import TextArea from '../../components/TeaxtArea'
import api from '../../services/api'


import logo from '../../assets/logo.png'
import './styles.css'


const CreateProduct = () => {

  
  const history = useHistory()
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    category: '',
    address: '',
    number: '',
    whatsapp: ''
  })
  const [description, setDescription] = useState('')

  const [selectedFile, setSelectedFile] = useState<File>()

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target

    setFormData({ ...formData, [name]: value })
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    const data = new FormData()

    const { name, price, category, address, number, whatsapp } = formData


    data.append('name', name)
    data.append('price', price)
    data.append('category', category)
    data.append('address', address)
    data.append('number', number)
    data.append('whatsapp', whatsapp)
    data.append('description', description)

    if (selectedFile) {
      data.append('image', selectedFile)
    }

    await api.post('product', data)

    alert('Produto Cadastrado com Sucesso!')
    history.push('/')


    // const response = await api.get('product')

    // console.log(response.data)


  }


  return (
    <div id="page-create-product">
      <header>
        <img src={logo} alt="O lenhador minoxidil" />
        <Link to="/">
          <FiArrowLeft />
            voltar
          </Link>
      </header>
      <main>
        <form onSubmit={handleSubmit}>
          <h1>
            Cadastro do <br />
            Produto
          </h1>

          <Dropzone onFileUploaded={setSelectedFile} />

          <fieldset>
            <legend>
              Dados
            </legend>

            <div className="field">
              <label htmlFor="name">Nome do Produto</label>
              <input
                type="text"
                name="name"
                id="name"
                onChange={handleInputChange}
              />
            </div>
            <div className="field">
              <label htmlFor="price">Preço</label>
              <input
                type="number"
                name="price"
                step="0.01"
                id="price"
                onChange={handleInputChange}
              />
            </div>
            <div className="field">
              <label htmlFor="category">Categoria</label>
              <input
                type="text"
                name="category"
                id="category"
                onChange={handleInputChange}
              />
            </div>

            <TextArea
              name="description"
              label="Descrição do Produto"
              value={description}
              onChange={e => { setDescription(e.target.value) }}
            />

            {/* <div className="field-group"> */}
            <div className="field">
              <label htmlFor="address">Endereço. Rua</label>
              <input
                type="text"
                name="address"
                id="address"
                onChange={handleInputChange}
              />
            </div>

            <div className="field">
              <label htmlFor="number">Endereço. Número</label>
              <input
                type="text"
                name="number"
                id="number"
                onChange={handleInputChange}
              />
            </div>

            {/* </div> */}

            <div className="field">
              <label htmlFor="whatsapp">WhatsApp</label>
              <input
                type="number"
                name="whatsapp"
                id="whatsapp"
                onChange={handleInputChange}
              />
            </div>

          </fieldset>

          <footer>
            <p>
              <strong> Importante! <br />
              preencha todos os dados</strong>
              <button type="submit"> cadastrar produto</button>
            </p>
          </footer>


        </form>
      </main>
    </div>
  )
}

export default CreateProduct