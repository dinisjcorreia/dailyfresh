// eslint-disable-next-line @typescript-eslint/no-unused-vars

'use client'

import { useState } from 'react'
import Image from "next/image"
import { Menu, ChevronRight, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const mockRecipes = [
  { id: 1, name: "Salada de Frango Grelhado", calories: 350, protein: 30, carbs: 15, fat: 20, cost: 8.50, image: "/placeholder.svg?height=80&width=80" },
  { id: 2, name: "Salteado Vegetariano", calories: 300, protein: 15, carbs: 40, fat: 10, cost: 7.25, image: "/placeholder.svg?height=80&width=80" },
  { id: 3, name: "Salmão com Legumes Assados", calories: 400, protein: 35, carbs: 20, fat: 25, cost: 12.00, image: "/placeholder.svg?height=80&width=80" },
]

export function DailyFreshAppComponent() {
  const [selectedRecipe, setSelectedRecipe] = useState(null)
  const [dietPreference, setDietPreference] = useState("")
  const [calorieGoal, setCalorieGoal] = useState("")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("recipes")

  const handleRecipeSelect = (recipe) => {
    setSelectedRecipe(recipe)
    setActiveTab("delivery")
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white p-4 flex flex-col items-center justify-center">
      <div className="relative w-[390px] h-[844px] bg-gradient-to-b from-green-50 to-white rounded-[54px] overflow-hidden shadow-xl border-[14px] border-gray-900">
        <div className="absolute top-0 w-[150px] h-[30px] bg-gray-900 left-1/2 transform -translate-x-1/2 rounded-b-[24px] flex justify-center items-end pb-1">
          <div className="w-[80px] h-[4px] bg-gray-800 rounded-full"></div>
        </div>
        <div className="absolute top-[15px] right-[25px] w-[4px] h-[4px] bg-gray-800 rounded-full"></div>
        <div className="w-full h-full overflow-y-auto px-4 py-12">
          <header className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <Image
                src="/placeholder.svg?height=32&width=32"
                alt="Logótipo DailyFresh"
                width={32}
                height={32}
                className="h-8 w-8"
              />
              <span className="text-lg font-semibold text-green-700">DailyFresh</span>
            </div>
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              <Menu className="h-5 w-5" />
            </Button>
          </header>

          {isMenuOpen ? (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
              <div className="w-64 h-full bg-white p-6 overflow-y-auto">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold">Menu</h2>
                  <Button variant="ghost" size="icon" onClick={toggleMenu}>
                    <X className="h-5 w-5" />
                  </Button>
                </div>
                <nav className="space-y-4">
                  <a href="#" className="block text-lg hover:text-green-600 transition-colors">Início</a>
                  <a href="#" className="block text-lg hover:text-green-600 transition-colors">As Minhas Receitas</a>
                  <a href="#" className="block text-lg hover:text-green-600 transition-colors">Planeador de Refeições</a>
                  <a href="#" className="block text-lg hover:text-green-600 transition-colors">Lista de Compras</a>
                  <a href="#" className="block text-lg hover:text-green-600 transition-colors">Definições da Conta</a>
                </nav>
              </div>
            </div>
          ) : null}

          <main>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-6">
                <TabsTrigger value="recipes" className="text-xs" onClick={() => setActiveTab("recipes")}>Receitas</TabsTrigger>
                <TabsTrigger value="delivery" className="text-xs" onClick={() => setActiveTab("delivery")}>Entrega</TabsTrigger>
                <TabsTrigger value="nutrition" className="text-xs" onClick={() => setActiveTab("nutrition")}>Nutrição</TabsTrigger>
                <TabsTrigger value="costs" className="text-xs" onClick={() => setActiveTab("costs")}>Custos</TabsTrigger>
              </TabsList>

              <TabsContent value="recipes">
                <Card className="border-none shadow-none">
                  <CardHeader>
                    <CardTitle className="text-lg">Sugestões de Receitas</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4 mb-4">
                      <div className="grid w-full items-center gap-1.5">
                        <Label htmlFor="dietPreference" className="text-sm">Preferência Alimentar</Label>
                        <Select onValueChange={setDietPreference}>
                          <SelectTrigger id="dietPreference">
                            <SelectValue placeholder="Selecionar dieta" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="vegetarian">Vegetariana</SelectItem>
                            <SelectItem value="vegan">Vegan</SelectItem>
                            <SelectItem value="paleo">Paleo</SelectItem>
                            <SelectItem value="keto">Keto</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid w-full items-center gap-1.5">
                        <Label htmlFor="calorieGoal" className="text-sm">Objetivo Calórico Diário</Label>
                        <Input
                          type="number"
                          id="calorieGoal"
                          placeholder="ex: 2000"
                          value={calorieGoal}
                          onChange={(e) => setCalorieGoal(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="space-y-4">
                      {mockRecipes.map((recipe) => (
                        <Card key={recipe.id} className="cursor-pointer hover:bg-green-50" onClick={() => handleRecipeSelect(recipe)}>
                          <CardContent className="p-4 flex items-center">
                            <Image
                              src={recipe.image}
                              alt={recipe.name}
                              width={80}
                              height={80}
                              className="rounded-md mr-4"
                            />
                            <div className="flex-1">
                              <h3 className="text-base font-semibold mb-1">{recipe.name}</h3>
                              <p className="text-xs text-gray-600">Calorias: {recipe.calories} | Proteínas: {recipe.protein}g</p>
                            </div>
                            <ChevronRight className="h-5 w-5 text-gray-400" />
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="delivery">
                <Card className="border-none shadow-none">
                  <CardHeader>
                    <CardTitle className="text-lg">Entrega de Ingredientes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {selectedRecipe ? (
                      <div>
                        <div className="flex items-center mb-4">
                          <Image
                            src={selectedRecipe.image}
                            alt={selectedRecipe.name}
                            width={60}
                            height={60}
                            className="rounded-md mr-4"
                          />
                          <h3 className="text-base font-semibold">Ingredientes para {selectedRecipe.name}</h3>
                        </div>
                        <ul className="list-disc list-inside mb-4 text-sm">
                          <li>Ingrediente 1</li>
                          <li>Ingrediente 2</li>
                          <li>Ingrediente 3</li>
                        </ul>
                        <Button className="w-full">Agendar Entrega</Button>
                      </div>
                    ) : (
                      <p className="text-sm">Por favor, selecione uma receita para ver os ingredientes e agendar a entrega.</p>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="nutrition">
                <Card className="border-none shadow-none">
                  <CardHeader>
                    <CardTitle className="text-lg">Controlo Nutricional</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {selectedRecipe ? (
                      <div>
                        <div className="flex items-center mb-4">
                          <Image
                            src={selectedRecipe.image}
                            alt={selectedRecipe.name}
                            width={60}
                            height={60}
                            className="rounded-md mr-4"
                          />
                          <h3 className="text-base font-semibold">Nutrição para {selectedRecipe.name}</h3>
                        </div>
                        <ul className="space-y-2 text-sm">
                          <li>Calorias: {selectedRecipe.calories}</li>
                          <li>Proteínas: {selectedRecipe.protein}g</li>
                          <li>Hidratos de Carbono: {selectedRecipe.carbs}g</li>
                          <li>Gorduras: {selectedRecipe.fat}g</li>
                        </ul>
                      </div>
                    ) : (
                      <p className="text-sm">Por favor, selecione uma receita para ver as informações nutricionais.</p>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="costs">
                <Card className="border-none shadow-none">
                  <CardHeader>
                    <CardTitle className="text-lg">Otimização de Custos</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {selectedRecipe ? (
                      <div>
                        <div className="flex items-center mb-4">
                          <Image
                            src={selectedRecipe.image}
                            alt={selectedRecipe.name}
                            width={60}
                            height={60}
                            className="rounded-md mr-4"
                          />
                          <h3 className="text-base font-semibold">Custo para {selectedRecipe.name}</h3>
                        </div>
                        <p className="text-xl font-bold text-green-700">{selectedRecipe.cost.toFixed(2)}€</p>
                        <p className="mt-2 text-sm">Este preço é otimizado com base nas taxas de mercado atuais e descontos disponíveis.</p>
                      </div>
                    ) : (
                      <p className="text-sm">Por favor, selecione uma receita para ver os custos otimizados.</p>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </main>
        </div>
      </div>
    </div>
  )
}