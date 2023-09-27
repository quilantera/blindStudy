"use client";
import * as Form from "@radix-ui/react-form";

export function LoginForm() {
  return (
    <Form.Root className="flex h-auto w-[28rem] flex-col items-center gap-1 rounded-lg bg-gray-50 px-8 py-8 shadow-sm dark:bg-gray-700 dark:text-white ">
      <h2 className="py-5 text-4xl font-semibold text-purple-100 dark:text-white">Bem-Vindo</h2>
      <div className="flex w-4/5 flex-col gap-3 py-3">
        <Form.Field className="flex w-full flex-col gap-1" name="username">
          <Form.Label className="text-lg font-medium"> Usuário</Form.Label>
          <Form.Control asChild>
            <input
              className="Input h-10 bg-slate-300 px-4 text-base dark:text-black"
              type="text"
              required
            />
          </Form.Control>
          <Form.Message className="text-sm text-red-700" match="valueMissing">
            Usuário não encontrado{" "}
          </Form.Message>
        </Form.Field>
        <Form.Field name="password" className="flex w-full flex-col gap-2">
          <Form.Label className="text-lg font-medium"> Senha</Form.Label>
          <Form.Control asChild>
            <input
              className="Input h-10 bg-slate-300 px-4 text-base dark:text-black"
              type="password"
              required
            />
          </Form.Control>
          <Form.Message className="text-sm text-red-700" match="valueMissing">
            Senha inválida{" "}
          </Form.Message>
        </Form.Field>
        <Form.Field
          name="remember"
          className="flex items-center justify-between  gap-1"
        >
          <div>
            <Form.Control asChild>
              <input type="checkbox" className="w-3 h-3" />
            </Form.Control>
            <Form.Label className=" text-sm font-medium">
              {" "}
              lembrar-me
            </Form.Label>
          </div>
          <a
            href="/"
            className="text-sm font-medium text-blue-700 duration-500 ease-in-out hover:text-cyan-500 dark:text-cyan-400"
          >
            Esqueci minha senha
          </a>
        </Form.Field>
        <Form.Submit asChild>
          <button className="mt-4 h-10 bg-blue-700 text-xl text-violet-50 duration-300 hover:bg-blue-800 dark:bg-gray-800 dark:border-2 dark:border-white  dark:hover:bg-white dark:hover:text-black">
            Enviar
          </button>
        </Form.Submit>
      </div>
    </Form.Root>
  );
}
