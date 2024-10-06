import Image from 'next/image';
import Especificacoes from './Especificacoes';
import { Produto } from "@/core";

export interface InformacoesProdutoProps{
    produto: Produto
}

export default function InformacoesProduto(props: InformacoesProdutoProps){
    const { produto } = props
    return produto?(
        <div className='flex items-center bg-violet-dark rouded-xl p-5'>
            <div className='flex-1 relative flex justify-center h-96'>
                <Image 
                    src={produto.imagem!}
                    fill
                    className='object-cover p-7'
                    alt='Imagem do Produto'
                />
            </div>
            <Especificacoes produto={produto!} />
        </div>
    ): null
}